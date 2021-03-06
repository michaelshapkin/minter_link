import { LetterSubject } from '@/model/Letter'
import { handleTxBuy } from '@/background/handlers/tx/buy'
import { handleTxSell } from '@/background/handlers/tx/sell'
import { handleTxSellAll } from '@/background/handlers/tx/sellAll'
import { handleTxSend } from '@/background/handlers/tx/send'
import { handleTxUnbond } from '@/background/handlers/tx/unbond'
import { handleTxDelegate } from '@/background/handlers/tx/delegate'
import { handleGetValidators } from '@/background/handlers/minter/validators'
import { handleGetWalletTxs } from '@/background/handlers/wallet/getTxs'
import { handleGetWalletBalances } from '@/background/handlers/wallet/getBalances'
import { handleGetWalletDelegations } from '@/background/handlers/wallet/getDelegations'
import { handleGetPasswordExpiry } from '@/background/handlers/keyring/getExpiry'
import { handleSetPassword } from '@/background/handlers/keyring/setPassword'
import { handleDeletePassword } from '@/background/handlers/keyring/deletePassword'
import { handleCmdVaultCreate } from '@/background/handlers/vault/create'
import { handleCmdVaultPing } from '@/background/handlers/vault/ping'
import { handleGetVaultExist } from '@/background/handlers/vault/getExist'
import { handleGetVaultEncoded } from '@/background/handlers/vault/getEncoded'
import { handleGetVaultPublicData } from '@/background/handlers/vault/getPublicData'
import { handleSetVaultActiveWallet } from '@/background/handlers/vault/setActiveWallet'
import { handleSetVaultActiveWalletMeta } from '@/background/handlers/vault/setActiveWalletMeta'
import { handleCmdWalletCreate } from '@/background/handlers/vault/walletCreate'
import { handleCmdWalletImport } from '@/background/handlers/vault/walletImport'
import { handleCmdWalletDelete } from '@/background/handlers/vault/walletDelete'
import { handleGetCoins } from '@/background/handlers/minter/coins'
import { handleCmdAddressBookItemAdd } from '@/background/handlers/address-book/addItem'
import { handleCmdAddressBookItemDelete } from '@/background/handlers/address-book/deleteItem'
import { handleGetAddressBookPublicData } from '@/background/handlers/address-book/getPublicData'
import { handleEstimateBuy } from '@/background/handlers/estimate/buy'
import { handleEstimateSell } from '@/background/handlers/estimate/sell'
import { handleGetAddressBookEncoded } from '@/background/handlers/address-book/getEncoded'
import { handleGetVaultStatus } from '@/background/handlers/vault/getStatus'
import { handlePaymentRequest } from '@/background/handlers/content-script/paymentRequest'
import { handlePaymentAccept } from '@/background/handlers/content-script/paymentAccept'
import { handlePaymentReject } from '@/background/handlers/content-script/paymentReject'

type BrowserMessageHandlers = {
  [key in LetterSubject]: Function;
}

// Map Letter subjects to handlers
const handlers: BrowserMessageHandlers = {
  [LetterSubject.GetPasswordExpiry]: handleGetPasswordExpiry,
  [LetterSubject.SetPassword]: handleSetPassword,
  [LetterSubject.DeletePassword]: handleDeletePassword,
  [LetterSubject.SetVaultActiveWallet]: handleSetVaultActiveWallet,
  [LetterSubject.SetVaultActiveWalletMeta]: handleSetVaultActiveWalletMeta,
  [LetterSubject.CmdVaultCreate]: handleCmdVaultCreate,
  [LetterSubject.CmdVaultPing]: handleCmdVaultPing,
  [LetterSubject.GetVaultStatus]: handleGetVaultStatus,
  [LetterSubject.GetVaultEncoded]: handleGetVaultEncoded,
  [LetterSubject.GetVaultExist]: handleGetVaultExist,
  [LetterSubject.GetVaultPublicData]: handleGetVaultPublicData,
  [LetterSubject.CmdWalletCreate]: handleCmdWalletCreate,
  [LetterSubject.CmdWalletImport]: handleCmdWalletImport,
  [LetterSubject.CmdWalletDelete]: handleCmdWalletDelete,
  [LetterSubject.GetWalletBalances]: handleGetWalletBalances,
  [LetterSubject.GetWalletDelegations]: handleGetWalletDelegations,
  [LetterSubject.GetWalletTxs]: handleGetWalletTxs,
  [LetterSubject.GetValidators]: handleGetValidators,
  [LetterSubject.GetCoins]: handleGetCoins,
  [LetterSubject.TxSend]: handleTxSend,
  [LetterSubject.TxBuy]: handleTxBuy,
  [LetterSubject.TxSell]: handleTxSell,
  [LetterSubject.TxSellAll]: handleTxSellAll,
  [LetterSubject.TxDelegate]: handleTxDelegate,
  [LetterSubject.TxUnbond]: handleTxUnbond,
  [LetterSubject.GetAddressBookPublicData]: handleGetAddressBookPublicData,
  [LetterSubject.GetAddressBookEncoded]: handleGetAddressBookEncoded,
  [LetterSubject.CmdAddressBookItemAdd]: handleCmdAddressBookItemAdd,
  [LetterSubject.CmdAddressBookItemDelete]: handleCmdAddressBookItemDelete,
  [LetterSubject.EstimateBuy]: handleEstimateBuy,
  [LetterSubject.EstimateSell]: handleEstimateSell,
  [LetterSubject.PaymentRequest]: handlePaymentRequest,
  [LetterSubject.PaymentAccept]: handlePaymentAccept,
  [LetterSubject.PaymentReject]: handlePaymentReject
}

export default handlers
