/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 2038:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"Connect":"Connect","Home":"Home","Address":"Address","Select Language":"Select Language","My Assets":"My Assets","Donation pool":"Donation pool","Performance":"Performance","Link":"Link","Investment List":"Investment List","Redemption List":"Redemption List","Index":"ID","Date":"Date","Principal":"Principal","Profit":"Profit","Progress":"Progress","Redemption":"Redemption","Pending":"Pending","Redeemed":"Redeemed","Add Asset":"Add Asset","Please enter the amount to add":"Please enter the amount to add","Max":"Max:","Please select the number of days":"Please select the number of days","Please select":"Please select","Confirm":"Confirm","Balance":"Balance:","Approve":"Approve","Copy successful":"Copy successful","Pool added successfully":"Pool added successfully","Pool added failed":"Pool added failed","Insufficient balance":"Insufficient balance","Red":"Redemption","Days":"Days","CI":",compound interest","Please connect wallet first":"Please connect wallet first","No data available":"No data available","Invitation Link":"Invitation Link","Please donate the bottom pool through the invitation link":"Please donate the bottom pool through the invitation link","The inviter has not donated the bottom pool, so you cannot donate the bottom pool temporarily":"The inviter has not donated the bottom pool, so you cannot donate the bottom pool temporarily","Redemption successful":"Redemption successful","Redemption failed":"Redemption failed","Maximum single pledge amount":"Maximum single pledge amount:","Cannot exceed the maximum pledged amount":"Cannot exceed the maximum pledged amount","Please use a valid invitation link.":"Please use a valid invitation link.","Maximum daily pledge amount":"Maximum daily pledge amount:","My current assets":"My current assets","Select Days":"Select Days","Please select the staking period":"Please select the staking period","Compound":",Compound","Cancel":"Cancel","Confirms":"Confirm","Hours":"Hours","Please refresh the page to sign":"Please refresh the page to sign","":""}');

/***/ }),

/***/ 3358:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./node_modules/react-dom/client.js
var client = __webpack_require__(5338);
// EXTERNAL MODULE: ./node_modules/react-router-dom/dist/index.js
var dist = __webpack_require__(4976);
// EXTERNAL MODULE: ./node_modules/react-router/dist/index.js
var react_router_dist = __webpack_require__(7767);
// EXTERNAL MODULE: ./node_modules/react-helmet-async/lib/index.esm.js
var index_esm = __webpack_require__(5902);
// EXTERNAL MODULE: ./node_modules/@wagmi/core/dist/chunk-GISSYJN5.js + 5 modules
var chunk_GISSYJN5 = __webpack_require__(4683);
// EXTERNAL MODULE: ./node_modules/@wagmi/core/dist/providers/public.js + 1 modules
var providers_public = __webpack_require__(9998);
// EXTERNAL MODULE: ./node_modules/lodash/memoize.js
var memoize = __webpack_require__(104);
var memoize_default = /*#__PURE__*/__webpack_require__.n(memoize);
// EXTERNAL MODULE: ./node_modules/@wagmi/chains/dist/index.mjs
var chains_dist = __webpack_require__(706);
;// ./src/utils/wagmi.ts





const {
  provider,
  chains
} = (0,chunk_GISSYJN5/* configureChains */.te)([chains_dist/* bsc */.NB, chains_dist/* bscTestnet */.ck], [(0,providers_public/* publicProvider */.n)()]);
const CHAIN_IDS = chains.map(c => c.id);
const isChainSupported = memoize_default()(chainId => CHAIN_IDS.includes(chainId));
// EXTERNAL MODULE: ./node_modules/wagmi/dist/index.js + 22 modules
var wagmi_dist = __webpack_require__(3376);
// EXTERNAL MODULE: ./node_modules/@wagmi/connectors/dist/chunk-2VZS2JHJ.js + 1 modules
var chunk_2VZS2JHJ = __webpack_require__(7664);
// EXTERNAL MODULE: ./node_modules/@wagmi/connectors/dist/metaMask.js
var metaMask = __webpack_require__(8680);
// EXTERNAL MODULE: ./node_modules/i18next/dist/esm/i18next.js
var i18next = __webpack_require__(2635);
// EXTERNAL MODULE: ./node_modules/react-i18next/dist/es/index.js + 15 modules
var es = __webpack_require__(2389);
;// ./i18n.ts



const resources = {
  en: {
    translation: __webpack_require__(2038),
  },
  zhCN: {
    translation: __webpack_require__(5372),
  },
}

i18next/* default.use */.Ay.use(es/* initReactI18next */.r9).init({
  resources,
  lng: "en",
})

/* harmony default export */ const i18n_0 = ((/* unused pure expression or super */ null && (i18n)));

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.promise.all-settled.js
var esnext_promise_all_settled = __webpack_require__(5874);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.url.to-json.js
var web_url_to_json = __webpack_require__(7208);
// EXTERNAL MODULE: ./node_modules/jotai/esm/index.mjs + 1 modules
var esm = __webpack_require__(2837);
;// ./src/hook/useWallet.ts






// 连接钱包
function useConnectWallet() {
  const {
    connect
  } = (0,wagmi_dist/* useConnect */.eF)({
    connector: new chunk_2VZS2JHJ/* InjectedConnector */.s()
  });
  return connect;
}

// 断开连接
function useDisconnectWallet() {
  const {
    disconnect
  } = useDisconnect();
  return disconnect;
}

// 获取当前账号信息
function useGetOwnAddress() {
  const {
    address,
    isConnected
  } = (0,wagmi_dist/* useAccount */.F7)();
  return {
    address,
    isConnected
  };
}
const queryChainIdAtom = (0,esm/* atom */.eU)(-1);
queryChainIdAtom.onMount = set => {
  const params = new URL(window.location.href).searchParams;
  const c = params.get('chainId');
  if (isChainSupported(+c)) {
    set(+c);
  } else {
    set(0);
  }
};
// EXTERNAL MODULE: ./node_modules/web3/dist/web3.min.js
var web3_min = __webpack_require__(6450);
var web3_min_default = /*#__PURE__*/__webpack_require__.n(web3_min);
// EXTERNAL MODULE: ./node_modules/antd/es/message/index.js + 12 modules
var message = __webpack_require__(3532);
;// ./src/context/UserContext.jsx
/* provided dependency */ var Buffer = __webpack_require__(8287)["hp"];

/* eslint-disable react-hooks/exhaustive-deps */





const UserContext = /*#__PURE__*/(0,react.createContext)();
const UserProvider = _ref => {
  let {
    children
  } = _ref;
  const {
    i18n,
    t
  } = (0,es/* useTranslation */.Bd)();
  (0,react.useEffect)(() => {
    const language = localStorage.getItem('language');
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [i18n]);
  const [messageApi, contextHolder] = message/* default */.Ay.useMessage();
  const ethereumHelper = window.ethereum || false;
  const web3 = new (web3_min_default())(ethereumHelper);
  const {
    address
  } = useGetOwnAddress();
  const [signLoaded, setSignLoaded] = (0,react.useState)(false); // 是否签名

  // 签名
  const signData = async () => {
    if (window.ethereum) {
      const provider = window.ethereum;
      const detectionMethods = [async () => {
        try {
          const accounts = await provider.request({
            method: 'eth_accounts'
          });

          // 尝试一个简单的签名请求
          const testMessage = '0x' + Buffer.from('VENUS').toString('hex');
          await provider.request({
            method: 'personal_sign',
            params: [testMessage, accounts[0]]
          });

          // 签名成功
          // console.log('签名成功');
          setSignLoaded(true);
        } catch (error) {
          // 签名失败
          setSignLoaded(false);
          messageApi.open({
            type: "warning",
            content: t('Please refresh the page to sign')
          });
          // const errorMsg = error.message?.toLowerCase() || '';
          // console.log('MetaMask签名错误:', errorMsg);
        }
      }];

      // 执行检测
      await Promise.allSettled(detectionMethods.map(method => method()));
    }
  };
  (0,react.useEffect)(() => {
    const checkSignData = async () => {
      if (!address) {
        return;
      }
      await signData();
    };
    checkSignData();
  }, [address]);
  return /*#__PURE__*/react.createElement(UserContext.Provider, {
    value: {
      signLoaded
    }
  }, contextHolder, children);
};
const useOwnerLayout = () => (0,react.useContext)(UserContext);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 3 modules
var styled_components_browser_esm = __webpack_require__(7618);
// EXTERNAL MODULE: ./node_modules/bignumber.js/bignumber.mjs
var bignumber = __webpack_require__(346);
;// ./src/config/const/address.ts
const addressUsdtToken = {
  56: '0x55d398326f99059fF775485246999027B3197955',
  97: '0x44004827f2F72566E12884A38f63f72F2a5143ea'
};
const addressStakingContract = {
  56: '0x26ff4f15412EFd1cb3E4E4BB61a5f358a428d989',
  97: '0xb59f1e2749a1e93d1ee503f94be8f8385d303d8d'
};
;// ./src/config/abi/erc20.json
const erc20_namespaceObject = /*#__PURE__*/JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]');
;// ./src/config/abi/staking_abi.json
const staking_abi_namespaceObject = /*#__PURE__*/JSON.parse('[{"inputs":[{"internalType":"address","name":"REFERRAL_","type":"address"},{"internalType":"address","name":"marketingAddress_","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"x","type":"uint256"},{"internalType":"uint256","name":"y","type":"uint256"}],"name":"PRBMath_MulDiv18_Overflow","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"},{"indexed":false,"internalType":"uint40","name":"timestamp","type":"uint40"},{"indexed":false,"internalType":"uint256","name":"index","type":"uint256"}],"name":"RewardPaid","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"index","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"stakeTime","type":"uint256"}],"name":"Staked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"REFERRAL","outputs":[{"internalType":"contract IReferral","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"VEN","outputs":[{"internalType":"contract IVEN","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"balance","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balances","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"emergencyWithdrawVEN","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getTeamKpi","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"isPreacher","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxStakeAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"network1In","outputs":[{"internalType":"uint256","name":"value","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"uint8","name":"index","type":"uint8"}],"name":"rewardOfSlot","outputs":[{"internalType":"uint256","name":"reward","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"}],"name":"setMarketingAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"setTeamVirtuallyInvestValue","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_ven","type":"address"}],"name":"setVEN","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint160","name":"_amount","type":"uint160"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"uint8","name":"_stakeIndex","type":"uint8"}],"name":"stake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"stakeCount","outputs":[{"internalType":"uint256","name":"count","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint160","name":"_amount","type":"uint160"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"uint8","name":"_stakeIndex","type":"uint8"},{"internalType":"address","name":"parent","type":"address"}],"name":"stakeWithInviter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"sync","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"t_supply","outputs":[{"internalType":"uint40","name":"stakeTime","type":"uint40"},{"internalType":"uint160","name":"tamount","type":"uint160"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"teamTotalInvestValue","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"teamVirtuallyInvestValue","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"unstake","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"userStakeRecord","outputs":[{"internalType":"uint40","name":"stakeTime","type":"uint40"},{"internalType":"uint160","name":"amount","type":"uint160"},{"internalType":"bool","name":"status","type":"bool"},{"internalType":"uint8","name":"stakeIndex","type":"uint8"}],"stateMutability":"view","type":"function"}]');
;// ./src/config/abi/referral_abi.json
const referral_abi_namespaceObject = /*#__PURE__*/JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MANAGER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"_children","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"_referralOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_referral","type":"address"},{"internalType":"address","name":"_user","type":"address"}],"name":"bindReferral","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"getReferral","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"getReferralCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"},{"internalType":"uint256","name":"_num","type":"uint256"}],"name":"getReferrals","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getRootAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"isBindReferral","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"root","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_newRoot","type":"address"}],"name":"setRootAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"}]');
;// ./src/config/const/index.ts



const abiErc20 = erc20_namespaceObject;
const abiStaking = staking_abi_namespaceObject;
const abiReferral = referral_abi_namespaceObject;
// EXTERNAL MODULE: ./node_modules/antd/es/modal/index.js + 57 modules
var modal = __webpack_require__(6947);
;// ./src/components/language/language.jsx
/* eslint-disable react-hooks/exhaustive-deps */



function Language(_ref) {
  let {
    visible,
    modalCancel,
    modalConfirm,
    language
  } = _ref;
  const {
    i18n,
    t
  } = (0,es/* useTranslation */.Bd)();
  (0,react.useEffect)(() => {
    const language = localStorage.getItem('language');
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [i18n]);
  return /*#__PURE__*/react.createElement(modal/* default */.A, {
    centered: true,
    open: visible,
    onCancel: () => modalCancel(false)
  }, /*#__PURE__*/react.createElement("div", {
    className: "lan_title"
  }, t("Select Language")), /*#__PURE__*/react.createElement("div", {
    className: "lan_pass"
  }, /*#__PURE__*/react.createElement("div", {
    className: "lan_contes",
    onClick: () => {
      modalConfirm("en");
    }
  }, /*#__PURE__*/react.createElement("em", null, /*#__PURE__*/react.createElement("div", {
    className: "lan_conzs"
  }, "English")), language === "en" && /*#__PURE__*/react.createElement("svg", {
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/react.createElement("path", {
    fillRule: "evenodd",
    d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
  }))), /*#__PURE__*/react.createElement("div", {
    className: "lan_contes",
    onClick: () => {
      modalConfirm("zhCN");
    }
  }, /*#__PURE__*/react.createElement("em", null, /*#__PURE__*/react.createElement("div", {
    className: "lan_botmsa"
  }, "\u7B80\u4F53\u4E2D\u6587")), language === "zhCN" && /*#__PURE__*/react.createElement("svg", {
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/react.createElement("path", {
    fillRule: "evenodd",
    d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
  })))));
}
/* harmony default export */ const language = (Language);
;// ./src/assets/images/logo.png
const logo_namespaceObject = __webpack_require__.p + "dbc5c7345a177a674c5c.png";
;// ./src/assets/images/xiala.svg
const xiala_namespaceObject = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEwLjUgMTFMMTUuMjYzMSA2LjVINS43MzY4NkwxMC41IDExWiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg==";
;// ./src/assets/images/lanu_en.svg
const lanu_en_namespaceObject = __webpack_require__.p + "cc8a2d2aef5d12b34a30.svg";
;// ./src/assets/images/lanu_zh.svg
const lanu_zh_namespaceObject = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPG1hc2sgaWQ9Im1hc2swXzE2MjdfODIiIHN0eWxlPSJtYXNrLXR5cGU6YWxwaGEiIG1hc2tVbml0cz0idXNlclNwYWNlT25Vc2UiIHg9IjAiIHk9IjAiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+CjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjEyIiBmaWxsPSIjRDlEOUQ5Ii8+CjwvbWFzaz4KPGcgbWFzaz0idXJsKCNtYXNrMF8xNjI3XzgyKSI+CjxyZWN0IHk9IjMiIHdpZHRoPSIzNiIgaGVpZ2h0PSIyNS43MTQzIiByeD0iMS43MTQyOSIgZmlsbD0id2hpdGUiLz4KPHJlY3QgeD0iLTEiIHk9Ii0yIiB3aWR0aD0iMzYiIGhlaWdodD0iMzEiIGZpbGw9IiNGMTM2MUQiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik04LjU3MTMyIDEzLjU3NzJMNS41NDg0MyAxNS43MzIxTDYuNjYzNzggMTIuMTkxMkwzLjY4MDE4IDkuOTgyMjJMNy4zOTIzOSA5Ljk0ODc5TDguNTcxMzIgNi40Mjg1OUw5Ljc1MDI1IDkuOTQ4NzlMMTMuNDYyNSA5Ljk4MjIyTDEwLjQ3ODkgMTIuMTkxMkwxMS41OTQyIDE1LjczMjFMOC41NzEzMiAxMy41NzcyWiIgZmlsbD0iI0ZGREM0MiIvPgo8cGF0aCBkPSJNMTcuMzUwNCAxMi4yMDRMMTcuNjUzNiAxMy40ODc0TDE4Ljk2NzggMTMuNTk1NkwxNy44NDEgMTQuMjgwNUwxOC4xNDQyIDE1LjU2MzlMMTcuMTQ0NSAxNC43MDM4TDE2LjAxNzcgMTUuMzg4N0wxNi41MjY3IDE0LjE3MjNMMTUuNTI3MSAxMy4zMTIyTDE2Ljg0MTMgMTMuNDIwNUwxNy4zNTA0IDEyLjIwNFoiIGZpbGw9IiNGRkRDNDIiLz4KPHBhdGggZD0iTTE2LjUwMiA4LjE4Njc4TDE3LjM2MTMgOS4xODcwMUwxOC41NzgxIDguNjc4ODNMMTcuODkyNCA5LjgwNTE4TDE4Ljc1MTcgMTAuODA1NEwxNy40Njg2IDEwLjUwMTNMMTYuNzgyOCAxMS42Mjc3TDE2LjY3NTYgMTAuMzEzNEwxNS4zOTI0IDEwLjAwOTNMMTYuNjA5MyA5LjUwMTA4TDE2LjUwMiA4LjE4Njc4WiIgZmlsbD0iI0ZGREM0MiIvPgo8cGF0aCBkPSJNMTMuMTkyIDUuMjMyODhMMTQuMzk1OCA1Ljc3MTA3TDE1LjI3OTcgNC43OTI0NUwxNS4xMzk5IDYuMTAzNjlMMTYuMzQzNyA2LjY0MTg4TDE1LjA1MzQgNi45MTQwOEwxNC45MTM2IDguMjI1MzJMMTQuMjU2IDcuMDgyMzFMMTIuOTY1NyA3LjM1NDUxTDEzLjg0OTYgNi4zNzU4OUwxMy4xOTIgNS4yMzI4OFoiIGZpbGw9IiNGRkRDNDIiLz4KPHBhdGggZD0iTTE1LjMyMDcgMTYuMzk1MkwxNS4wNTU2IDE3LjY4NkwxNi4yMDEyIDE4LjMzN0wxNC44OTE3IDE4LjQ4MzdMMTQuNjI2NSAxOS43NzQ1TDE0LjA4MjMgMTguNTc0NEwxMi43NzI4IDE4LjcyMUwxMy43NDYgMTcuODMyN0wxMy4yMDE5IDE2LjYzMjZMMTQuMzQ3NSAxNy4yODM2TDE1LjMyMDcgMTYuMzk1MloiIGZpbGw9IiNGRkRDNDIiLz4KPC9nPgo8L3N2Zz4K";
;// ./src/components/header/index.jsx
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/self-closing-comp */
















const CustomStyle = styled_components_browser_esm/* default */.Ay.div`
	.header_container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		height: 62px;
	}
	.header_left {
		em {
			display: inline-block;
		    margin-left: 15px;
			cursor: pointer;
		}
		img {
			width: 90px;
		}
	}
	.header_right {
		display: flex;
    	margin-right: 15px;
	}
	.header_login {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		background: linear-gradient(105deg, #B45865, #4951CA);
		width: 140px;
		height: 30px;
		font-size: 14px;
		font-family: HarmonyOS_Sans_SC_Bold;
		font-weight: bold;
    	color: #fff;
		border-radius: 43px;
    	margin: 0 10px;
		cursor: pointer;
		&::before {
			content: '';
			position: absolute;
			top: 0;
			right: 0;
			left: 0;
			bottom: 0;
			z-index: -1;
			margin: -1px;
			border-radius: inherit;
			background: linear-gradient(-45deg, #5B60DA, #C47C88);
		}
	}
	.header_lognn {
		display: flex;
    	align-items: center;
		cursor: pointer;
	}
	.header_lanucss {
	    display: flex;
    	align-items: center;
		cursor: pointer;
	}
	.header_level {
		span {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 30px;
    		height: 30px;
			background: #181818;
			border-radius: 50%;
			color: #E0E0E0;
		}
	}
`;
function Header() {
  const {
    i18n,
    t
  } = (0,es/* useTranslation */.Bd)();
  (0,react.useEffect)(() => {
    const language = localStorage.getItem('language');
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [i18n]);
  const {
    signLoaded
  } = useOwnerLayout();
  const ethereumHelper = window.ethereum || false;
  const web3 = new (web3_min_default())(ethereumHelper);
  const {
    chain
  } = (0,wagmi_dist/* useNetwork */.AE)();
  const {
    address,
    isConnected
  } = useGetOwnAddress();
  const connectWallet = useConnectWallet();
  const navigate = (0,react_router_dist/* useNavigate */.Zp)();
  const [visible, setVisible] = (0,react.useState)(false);
  const [myPerformance, setMyPerformance] = (0,react.useState)("");
  (0,react.useEffect)(() => {
    if (!address) {
      // 自动打开连接钱包
      // connectWallet();
    }
  }, [address]);
  const handleNavigateClick = name => {
    navigate(name);
    window.scrollTo(0, 0);
  };
  const modalConfirm = lanu => {
    i18n.changeLanguage(lanu);
    localStorage.setItem('language', lanu);
    setVisible(false);
  };

  // 我的业绩
  const handleMyKpi = async () => {
    try {
      var _chain$id;
      const contract = new web3.eth.Contract(abiStaking, addressStakingContract[(_chain$id = chain == null ? void 0 : chain.id) != null ? _chain$id : 56]);
      if (address && contract) {
        // 业绩
        const getTeamKpi = await contract.methods.getTeamKpi(address).call();
        const getTeamKpiBig = new bignumber/* default */.A(getTeamKpi.toString()).shiftedBy(-18).toString();
        setMyPerformance(getTeamKpiBig);
      }
    } catch (error) {
      console.log('contract error===>', error);
    }
  };
  (0,react.useEffect)(() => {
    if (address && signLoaded) {
      // 我的业绩
      handleMyKpi();
    }
  }, [address, signLoaded]);
  return /*#__PURE__*/react.createElement(CustomStyle, null, /*#__PURE__*/react.createElement("div", {
    className: "header_container"
  }, /*#__PURE__*/react.createElement("div", {
    className: "header_left"
  }, /*#__PURE__*/react.createElement("em", {
    onClick: () => {
      handleNavigateClick("/");
    }
  }, /*#__PURE__*/react.createElement("img", {
    src: logo_namespaceObject,
    alt: ""
  }))), /*#__PURE__*/react.createElement("div", {
    className: "header_right"
  }, address && myPerformance && /*#__PURE__*/react.createElement("div", {
    className: "header_level"
  }, myPerformance >= 0 && myPerformance < 10000 ? /*#__PURE__*/react.createElement("span", null, "A") : myPerformance >= 10000 && myPerformance < 50000 ? /*#__PURE__*/react.createElement("span", null, "B") : myPerformance >= 50000 && myPerformance < 100000 ? /*#__PURE__*/react.createElement("span", null, "C") : myPerformance >= 100000 && myPerformance < 500000 ? /*#__PURE__*/react.createElement("span", null, "D") : myPerformance >= 500000 && myPerformance < 1000000 ? /*#__PURE__*/react.createElement("span", null, "E") : myPerformance >= 1000000 ? /*#__PURE__*/react.createElement("span", null, "F") : null), isConnected ? /*#__PURE__*/react.createElement("div", {
    className: "header_login"
  }, /*#__PURE__*/react.createElement("div", {
    className: "header_lognn"
  }, /*#__PURE__*/react.createElement("i", null, address ? `${address.substring(0, 6)}****${address.substr(-4)}` : ''))) : /*#__PURE__*/react.createElement("div", {
    className: "header_login",
    onClick: () => connectWallet()
  }, t('Connect')), /*#__PURE__*/react.createElement("div", {
    className: "header_lanucss",
    onClick: () => setVisible(true)
  }, i18n.language === 'en' ? /*#__PURE__*/react.createElement("img", {
    src: lanu_en_namespaceObject,
    alt: ""
  }) : /*#__PURE__*/react.createElement("img", {
    src: lanu_zh_namespaceObject,
    alt: ""
  }), /*#__PURE__*/react.createElement("img", {
    src: xiala_namespaceObject,
    alt: "",
    style: {
      width: "14px"
    }
  })))), visible && /*#__PURE__*/react.createElement(language, {
    visible: visible,
    modalCancel: () => setVisible(false),
    modalConfirm: modalConfirm,
    language: i18n.language
  }));
}
/* harmony default export */ const header = (Header);
// EXTERNAL MODULE: ./node_modules/react-countup/build/index.js
var build = __webpack_require__(4856);
// EXTERNAL MODULE: ./node_modules/copy-to-clipboard/index.js
var copy_to_clipboard = __webpack_require__(7965);
var copy_to_clipboard_default = /*#__PURE__*/__webpack_require__.n(copy_to_clipboard);
;// ./src/utils/common.ts
// 保留小数，不四舍五入
const toFixedFloor = function (num, decimal, withComma) {
  if (decimal === void 0) {
    decimal = 4;
  }
  if (withComma === void 0) {
    withComma = true;
  }
  const value = Number(num);
  if (isNaN(value)) return "0";

  // 向下截断，不四舍五入
  const factor = Math.pow(10, decimal);
  const floored = Math.floor(num * factor) / factor;

  // 转成字符串，拆分整数和小数部分
  let [intPart, decPart] = floored.toString().split(".");

  // 整数部分加千分位
  intPart = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  // 去掉小数部分多余的 0
  if (decPart) {
    decPart = decPart.replace(/0+$/, ""); // 去掉结尾的0
  }

  // 如果没有小数部分则不加点
  return decPart ? `${intPart}.${decPart}` : intPart;
};

// 千分位
const toFixedPart = num => {
  const value = Number(num);
  if (isNaN(value)) return "0";

  // 转成字符串，拆分整数和小数部分
  let [intPart, decPart] = num.toString().split(".");

  // 整数部分加千分位
  intPart = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  // 去掉小数部分多余的 0
  if (decPart) {
    decPart = decPart.replace(/0+$/, ""); // 去掉结尾的0
  }

  // 如果没有小数部分则不加点
  return decPart ? `${intPart}.${decPart}` : intPart;
};
const parseNumber = (num, decimal) => {
  let newNum = "";
  let count = 0;
  let numStr = String(num); // 数字转为字符串;
  // 当字符串不含有小数点
  if (numStr.indexOf(".") == -1) {
    let i;
    for (i = numStr.length - 1; i >= 0; i--) {
      if (count % 3 == 0 && count != 0) {
        newNum = numStr.charAt(i) + "," + newNum;
      } else {
        newNum = numStr.charAt(i) + newNum;
      }
      count++;
    }
    // numStr= newNum + ".00"; // 自动补小数点后两位
    numStr = newNum;
    return numStr;
  } else {
    var _numberArr$;
    // 当字符串含有小数点
    for (let i = numStr.indexOf(".") - 1; i >= 0; i--) {
      if (count % 3 == 0 && count != 0) {
        newNum = numStr.charAt(i) + "," + newNum;
      } else {
        newNum = numStr.charAt(i) + newNum; // 字符拼接
      }
      count++;
    }
    const reg = /^0+/;
    const numberArr = String(numStr).split('.');

    //  小数点后面 0 的个数
    const zeroArrCount = numberArr && ((_numberArr$ = numberArr[1]) == null ? void 0 : _numberArr$.match(reg));
    const zeroCount = zeroArrCount == null ? void 0 : zeroArrCount[0];
    const zeroCountLen = (zeroCount == null ? void 0 : zeroCount.length) || 0;
    // 保留几位小数
    const zeroDecimal = zeroCountLen !== 0 ? zeroCountLen + 2 : 0;
    const numDecimal = decimal ? decimal + 1 : 3 + 1;
    const decimalNewNum = zeroDecimal === 0 ? numDecimal : zeroDecimal + 1;
    numStr = newNum + (numStr + "00").substr((numStr + "00").indexOf("."), decimalNewNum);
    return numStr;
  }
};

// 时间戳转换时间(毫秒)
const formatTimestamp = function (timestamp, format) {
  if (format === void 0) {
    format = 'YYYY-MM-DD HH:mm:ss';
  }
  if (!timestamp) return '';
  const date = new Date(timestamp);
  const pad = num => String(num).padStart(2, '0');
  const map = {
    YYYY: date.getFullYear(),
    MM: pad(date.getMonth() + 1),
    DD: pad(date.getDate()),
    HH: pad(date.getHours()),
    mm: pad(date.getMinutes()),
    ss: pad(date.getSeconds())
  };
  return format.replace(/YYYY|MM|DD|HH|mm|ss/g, match => map[match]);
};
// EXTERNAL MODULE: ./node_modules/antd/es/input/index.js + 38 modules
var input = __webpack_require__(9572);
;// ./src/components/Loader/Dots.tsx

const Dots = styled_components_browser_esm/* default */.Ay.span`
  &::after {
    display: inline-block;
    animation: ellipsis 1.25s infinite;
    content: '.';
    width: 1em;
    text-align: left;
  }
  @keyframes ellipsis {
    0% {
      content: '.';
    }
    33% {
      content: '..';
    }
    66% {
      content: '...';
    }
  }
`;
/* harmony default export */ const Loader_Dots = (Dots);
;// ./src/assets/images/modal_bg.png
const modal_bg_namespaceObject = __webpack_require__.p + "65aa096d98e1f8e19c33.png";
;// ./src/assets/images/xiala.png
const assets_images_xiala_namespaceObject = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAQCAYAAAABOs/SAAAC0ElEQVR4AayUy2tTURDGm5tHNTFiKVSsBMRSHwUFBe3etoJLcWNb1L3dCEIfsWml9YkKiv4f7qJpg9J1tVopCAkYdBGyCnk/mibx94X2aoxNg/YyH2dmzsx898yde4xcLnc5m82+Bi8TiURPtVo12nb5icVirnQ6fSWTyfjBC3iOGhCdgqcfDNvt9lsEHMO3a+ThcLjd7XYPGoYxabFYBgV4+kSwgvEd4g4warVax/L5/GH0/xYOYO3u7h6g/h2KnQGSEP4fhtPpXEB5gOcrOIB+DUzQ+kOsFnz/JOQ6qDHE+hic2yzynnXe5XKtGbzNOuRBHF6g0ztZR4CXth8nSV3BbF3IaWd2LlF7DvSRmQdvwDRcX/BVakVR8jgCbMyir7DuByNqe6FQ8KC3LJDaisXiAAlT4Cwog0UwA4cOtoHeViOWAmGRjQCJ89gh7A7065VKZZxJPIhvRyHeDumFcrn8hGANrIZ3Cf8stT9TUy/BVtsvYllsbMTj8XfokwR/wt6LPsI6nUqlmrY9EonsUXshvU/OSXLy1PCzevVNWav4TTFPvOXxeDxbbZ/B9wG4wbDNZhtLJpNH0BsEAltXV9cQG5oTTW8JXwAyHyc128u+KQ3E2iFBbV9AvwdCoJOW33A4HLf/bDsEaq++6SPizgPVXOJfvQtpXXvZM0VBpvG7AnmJRLV9nOK1trOOchH4aHvtktHlsNle/Y6a3iI1/MAL8Ro16tqL35RtiRVBYgHyRVYf9jLYB/lV2n6Tk5/gctBNNMH+afbWwVugQdKLmoOEr0GaEiuaomq7foeH2LpkOiEf5uRPsZ+j9wPV0eUwx4vqmzYlJa9+quX4GyDXJSNyTfsqMbpeL7L2AP2XOukUpKvEbtteYk3Rm5pGM4WCxWg0GmSdBstABCVyRKr21m4k7JakZWJV6+3tVduDTPgr7G/gI//tM0664zcltk5+AgAA//+qBbAeAAAABklEQVQDAN6DT90cGf2+AAAAAElFTkSuQmCC";
;// ./src/components/index/addPollModal.jsx
/* eslint-disable react-hooks/exhaustive-deps */














const addPollModal_CustomStyle = styled_components_browser_esm/* default */.Ay.div`
	.mo_backopen {
		position: fixed;
		width: 100%;
		height: 100%;
		top: 0px;
		left: 0px;
		background: rgb(0, 0, 0, 0.5);
	}
	.mo_backconter {
		position: fixed;
		background: url(${modal_bg_namespaceObject}) no-repeat;
		background-size: 100%;
		width: 350px;
		height: 252px;
		top: 50%;
		left: 50%;
		margin-top: -126px;
		margin-left: -175px;
		padding: 0 25px;
	}
	.mo_title {
		text-align: center;
    	margin: 20px 0;
		span {
			font-size: 25px;
			color: #F5F5F5;
			font-weight: 500;
		}
	}
	.mo_input {
		input {
			height: 30px;
			&::placeholder {
				font-size: 14px;
			}
		}
	}
	.mo_flexmax {
		display: flex;
		justify-content: space-between;
		margin-top: 15px;
	}
	.mo_max {
		font-weight: 500;
    	color: #F5F5F5;
	}
	.mo_select {
	    position: relative;
		font-weight: 500;
    	color: #999999;
		em {
			cursor: pointer;
		}
		img {
			width: 15px;
    		margin-left: 5px;
		}
	}
	.mo_days {
		position: absolute;
		background: #fff;
		right: 0px;
		top: 35px;
		padding-left: 30px;
		padding-top: 20px;
		padding-bottom: 5px;
		border-radius: 5px;
		&::after {
			content: '';
			position: absolute;
			top: -8px;
    		right: 30px;
			width: 0; 
			height: 0; 
			border-left: 8px solid transparent;
			border-right: 8px solid transparent;
			border-bottom: 8px solid #fff;
		}
		span {
			display: block;
			color: #666;
			margin-bottom: 15px;
			cursor: pointer;
		}
	}
	.mo_buttom {
		display: flex;
		gap: 20px;
		margin-top: 30px;
	}
	.mo_cancel {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 50%;
		height: 40px;
		background: #2C2D3E;
		border-radius: 10px;
		font-size: 16px;
		font-weight: 500;
		cursor: pointer;
	}
	.mo_confirm {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 50%;
		height: 40px;
		background: linear-gradient(105deg, #B45865, #4951CA);
		border-radius: 10px;
		font-size: 16px;
		font-weight: 500;
		cursor: pointer;
	}
`;
function AddPollModal(_ref) {
  let {
    modalOpen,
    modalConfirm,
    modalCancel,
    invitation,
    isBindReferral,
    isInvitationReferral,
    dayAccountMax,
    maxAmount
  } = _ref;
  const {
    i18n,
    t
  } = (0,es/* useTranslation */.Bd)();
  (0,react.useEffect)(() => {
    const language = localStorage.getItem('language');
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [i18n]);
  const ethereumHelper = window.ethereum || false;
  const web3 = new (web3_min_default())(ethereumHelper);
  const {
    address
  } = useGetOwnAddress();
  const {
    chain
  } = (0,wagmi_dist/* useNetwork */.AE)();
  const [messageApi, contextHolder] = message/* default */.Ay.useMessage();
  const [inputNumber, setInputNumber] = (0,react.useState)("");
  const [inputDayIndex, setInputIndex] = (0,react.useState)("");
  const [allApprove, setAllApprove] = (0,react.useState)("");
  const [usdtBalance, setUsdtBalance] = (0,react.useState)("0.0000");
  const [isApproveLoading, setIsApproveLoading] = (0,react.useState)(false);
  const [isLoading, setIsLoading] = (0,react.useState)(false);
  const [isDayOpen, setIsDayOpen] = (0,react.useState)(false);
  const inputNumberChange = e => {
    let value = e.target.value.replace(/[^0-9.]/g, '');
    if (value.indexOf('.') > 0) {
      value = value.slice(0, value.indexOf('.') + 5);
    }
    setInputNumber(value);
  };
  const onClickCancel = () => {
    modalCancel(false);
    setIsApproveLoading(false);
    setIsLoading(false);
  };
  const handleDayIndex = index => {
    if (isLoading) {
      return;
    }
    setInputIndex(index);
    setIsDayOpen(false);
  };

  // 查询余额、授权
  const handleData = async () => {
    try {
      var _chain$id;
      const contract = new web3.eth.Contract(abiErc20, addressUsdtToken[(_chain$id = chain == null ? void 0 : chain.id) != null ? _chain$id : 56]);
      if (address && contract) {
        var _chain$id2;
        // 查询是否授权
        let allowance = await contract.methods.allowance(address, addressStakingContract[(_chain$id2 = chain == null ? void 0 : chain.id) != null ? _chain$id2 : 56]).call();
        const allowanceBig = new bignumber/* default */.A(allowance.toString()).shiftedBy(-18).toString();
        setAllApprove(allowanceBig);
        // console.log("allowanceBig===>", allowanceBig)

        // 查询余额
        const balance = await contract.methods.balanceOf(address).call();
        const balanceBig = new bignumber/* default */.A(balance.toString()).shiftedBy(-18).toString();
        setUsdtBalance(balanceBig);
        // console.log("balanceBig===>", balanceBig)
      } else {
        setAllApprove("0");
        setUsdtBalance("0");
      }
    } catch (error) {
      console.log('contract error===>', error);
      setAllApprove("0");
      setUsdtBalance("0");
    }
  };
  (0,react.useEffect)(() => {
    if (address) {
      handleData(); // 查询余额、授权
    }
  }, [address]);

  // 授权
  const handleApprove = async () => {
    var _chain$id3;
    setIsApproveLoading(true);
    const contract = new web3.eth.Contract(abiErc20, addressUsdtToken[(_chain$id3 = chain == null ? void 0 : chain.id) != null ? _chain$id3 : 56]);

    // 获取gas费
    let gas = await web3.eth.getGasPrice();
    const amount = "1000000000000000000000000000";
    const approveAmount = web3.utils.toWei(amount.toString(), 'ether');
    await contract.methods.approve(addressStakingContract[chain == null ? void 0 : chain.id], approveAmount.toString()).send({
      from: address,
      gasPrice: gas
    }, (err, result) => {
      if (err) {
        setIsApproveLoading(false);
        console.log('Approve err===>', err);
      } else {
        console.log('Approve result===>', result);
      }
    });
    setIsApproveLoading(false);
    handleData(); // 查询余额、授权
  };

  // 质押
  const handleStake = async invitation => {
    setIsLoading(true);
    const contract = new web3.eth.Contract(abiStaking, addressStakingContract[chain == null ? void 0 : chain.id]);

    // 获取gas费
    let gas = await web3.eth.getGasPrice();
    const amount = web3.utils.toWei(inputNumber, 'ether');
    if (invitation) {
      await contract.methods.stakeWithInviter(amount, 0, inputDayIndex, invitation).send({
        from: address,
        gasPrice: gas
      }, (err, result) => {
        if (err) {
          setIsLoading(false);
          messageApi.open({
            type: 'error',
            content: t('Pool added failed')
          });
          console.log('stake err===>', err);
        } else {
          console.log('stake result===>', result);
        }
      });
    } else {
      await contract.methods.stake(amount, 0, inputDayIndex).send({
        from: address,
        gasPrice: gas
      }, (err, result) => {
        if (err) {
          setIsLoading(false);
          messageApi.open({
            type: 'error',
            content: t('Pool added failed')
          });
          console.log('stake err===>', err);
        } else {
          console.log('stake result===>', result);
        }
      });
    }
    messageApi.open({
      type: 'success',
      content: t('Pool added successfully')
    });
    handleData(); // 查询余额、授权
    modalConfirm();
    onClickCancel();
    setIsLoading(false);
    setInputNumber("");
  };
  const handleSubmit = async () => {
    if (isLoading) {
      return;
    }
    if (!address) {
      messageApi.open({
        type: 'warning',
        content: t('Please connect wallet first')
      });
      return;
    }
    if (Number(inputNumber) <= 0) {
      messageApi.open({
        type: 'warning',
        content: t('Please enter the amount to add')
      });
      return;
    }
    if (Number(inputNumber) > Number(usdtBalance)) {
      messageApi.open({
        type: 'warning',
        content: t('Insufficient balance')
      });
      return;
    }
    if (Number(inputNumber) > Number(maxAmount)) {
      messageApi.open({
        type: 'warning',
        content: t('Maximum single pledge amount') + toFixedFloor(maxAmount, 0)
      });
      return;
    }
    if (inputDayIndex === "") {
      messageApi.open({
        type: 'warning',
        content: t('Select Days')
      });
      return;
    }

    // 1、判断自己是否有质押
    if (isBindReferral) {
      handleStake();
    } else {
      // 2、没有质押的话，判断url是否有邀请人
      if (invitation) {
        // 有邀请人(邀请人地址是否质押)
        if (isInvitationReferral) {
          handleStake(invitation);
        } else {
          // 邀请人地址没有质押
          messageApi.open({
            type: 'error',
            content: t('The inviter has not donated the bottom pool, so you cannot donate the bottom pool temporarily')
          });
        }
      } else {
        // 没有邀请人
        messageApi.open({
          type: 'error',
          content: t('Please donate the bottom pool through the invitation link')
        });
      }
    }
  };
  return /*#__PURE__*/react.createElement(addPollModal_CustomStyle, null, contextHolder, /*#__PURE__*/react.createElement("div", {
    className: "mo_backopen",
    onClick: onClickCancel
  }), /*#__PURE__*/react.createElement("div", {
    className: "mo_backconter"
  }, /*#__PURE__*/react.createElement("div", {
    className: "mo_title"
  }, /*#__PURE__*/react.createElement("span", null, t('Add Asset'))), /*#__PURE__*/react.createElement("div", {
    className: "mo_input"
  }, /*#__PURE__*/react.createElement(input/* default */.A, {
    type: "number",
    placeholder: t('Please enter the amount to add'),
    allowClear: true,
    value: inputNumber,
    onChange: inputNumberChange
  })), /*#__PURE__*/react.createElement("div", {
    className: "mo_flexmax"
  }, /*#__PURE__*/react.createElement("div", {
    className: "mo_max"
  }, /*#__PURE__*/react.createElement("span", null, t('Max')), /*#__PURE__*/react.createElement("em", null, toFixedFloor(dayAccountMax))), /*#__PURE__*/react.createElement("div", {
    className: "mo_select"
  }, /*#__PURE__*/react.createElement("em", {
    onClick: () => setIsDayOpen(!isDayOpen)
  }, inputDayIndex === 0 ? /*#__PURE__*/react.createElement("i", null, "1", t('Days')) : inputDayIndex === 1 ? /*#__PURE__*/react.createElement("i", null, "15", t('Days')) : inputDayIndex === 2 ? /*#__PURE__*/react.createElement("i", null, "30", t('Days')) : /*#__PURE__*/react.createElement("i", null, t('Select Days')), /*#__PURE__*/react.createElement("img", {
    src: assets_images_xiala_namespaceObject,
    alt: ""
  })), isDayOpen && /*#__PURE__*/react.createElement("div", {
    className: "mo_days",
    style: {
      width: i18n.language === "en" ? "240px" : "180px"
    }
  }, /*#__PURE__*/react.createElement("span", {
    onClick: () => handleDayIndex(0)
  }, "1", t('Days'), t('Compound'), " 0.3%"), /*#__PURE__*/react.createElement("span", {
    onClick: () => handleDayIndex(1)
  }, "15", t('Days'), t('Compound'), " 0.6%"), /*#__PURE__*/react.createElement("span", {
    onClick: () => handleDayIndex(2)
  }, "30", t('Days'), t('Compound'), " 1.2%")))), /*#__PURE__*/react.createElement("div", {
    className: "mo_buttom"
  }, /*#__PURE__*/react.createElement("div", {
    className: "mo_cancel",
    onClick: onClickCancel
  }, t('Cancel')), Number(allApprove) === 0 || Number(allApprove) < Number(inputNumber) ? /*#__PURE__*/react.createElement("div", {
    className: "mo_confirm",
    onClick: handleApprove
  }, !isApproveLoading && /*#__PURE__*/react.createElement("span", null, t('Approve')), isApproveLoading && /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(Loader_Dots, null, t('Approve')))) : /*#__PURE__*/react.createElement("div", {
    className: "mo_confirm",
    onClick: handleSubmit
  }, !isLoading && /*#__PURE__*/react.createElement("span", null, t('Confirms')), isLoading && /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(Loader_Dots, null, t('Confirms')))))));
}
/* harmony default export */ const addPollModal = (AddPollModal);
// EXTERNAL MODULE: ./node_modules/antd/es/spin/index.js + 6 modules
var spin = __webpack_require__(4716);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/LoadingOutlined.js + 1 modules
var LoadingOutlined = __webpack_require__(3567);
;// ./src/components/index/CountdownTimestamp.jsx


function CountdownTimestamp(_ref) {
  let {
    targetTimestamp
  } = _ref;
  const {
    i18n,
    t
  } = (0,es/* useTranslation */.Bd)();
  (0,react.useEffect)(() => {
    const language = localStorage.getItem('language');
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [i18n]);

  // 如果传入的是秒级时间戳，转换成毫秒
  const targetMs = (0,react.useRef)(targetTimestamp.toString().length === 10 ? targetTimestamp * 1000 : targetTimestamp);
  const [msLeft, setMsLeft] = (0,react.useState)(Math.max(0, targetMs.current - Date.now()));
  const timerRef = (0,react.useRef)(null);
  (0,react.useEffect)(() => {
    const update = () => {
      const left = Math.max(0, targetMs.current - Date.now());
      setMsLeft(left);
    };
    update(); // 初始化一次
    timerRef.current = setInterval(update, 1000); // 每秒刷新
    return () => clearInterval(timerRef.current);
  }, []);

  // 转换成天、时、分、秒
  const days = Math.floor(msLeft / (24 * 3600 * 1000));
  const hours = Math.floor(msLeft % (24 * 3600 * 1000) / (3600 * 1000));
  const minutes = Math.floor(msLeft % (3600 * 1000) / (60 * 1000));
  const seconds = Math.floor(msLeft % (60 * 1000) / 1000);

  // 格式化：始终两位数
  const pad = num => String(num).padStart(2, "0");
  return /*#__PURE__*/react.createElement("div", {
    className: "tabs_list_etime"
  }, days, t('Days'), ":", pad(hours), ":", pad(minutes), ":", pad(seconds));
}
;// ./src/components/index/AnimatedProfit.jsx


const AnimatedProfit = _ref => {
  let {
    value,
    decimals = 4,
    duration = 1.2
  } = _ref;
  const spanRef = (0,react.useRef)(null);
  const prevRef = (0,react.useRef)(Number(value) || 0);
  const {
    update
  } = (0,build/* useCountUp */.S9)({
    ref: spanRef,
    start: prevRef.current,
    end: Number(value) || 0,
    duration,
    decimals,
    separator: ",",
    formattingFn: v => Number(v).toFixed(decimals),
    preserveValue: true
  });
  (0,react.useEffect)(() => {
    const newVal = Number(value) || 0;

    // 只有真正变化才触发动画
    if (newVal !== prevRef.current) {
      update(newVal);
      prevRef.current = newVal;
    }
  }, [value, update]);
  return /*#__PURE__*/react.createElement("span", {
    ref: spanRef,
    className: "conts_wid4 tabs_list_colo2",
    style: {
      fontFamily: "HarmonyOS_Sans_SC_Light",
      display: "inline-block",
      minWidth: `${Math.max(6, decimals + 3)}ch`
    }
  });
};
/* harmony default export */ const index_AnimatedProfit = (AnimatedProfit);
;// ./src/assets/images/list_liang1.png
const list_liang1_namespaceObject = __webpack_require__.p + "ecca2a60a41156f05e07.png";
;// ./src/assets/images/list_liang2.png
const list_liang2_namespaceObject = __webpack_require__.p + "b7634047ae190e607ab5.png";
;// ./src/components/index/list.jsx
/* eslint-disable react-hooks/exhaustive-deps */















const list_CustomStyle = styled_components_browser_esm/* default */.Ay.div`
	.table_conter {
		margin-bottom: 20px;
		span {
			position: relative;
			font-size: 15px;
			color: #7E7B6F;
			font-weight: bold;
    		margin-right: 30px;
			cursor: pointer;
		}
		em {
			position: absolute;
			left: 0px;
			width: 100%;
			bottom: -15px;
		}
		.on {
			color: #F2EBB4;
		}
		img {
			width: 100%;
		}
	}
	.tabs_title_conter {
	    display: flex;
		align-items: center;
		height: 40px;
		padding: 0 10px;
		background: #292929;
		span {
			font-size: 14px;
			color: #F5F5F5;
			font-weight: 500;
			opacity: .8;
		}
	}
	.tabs_list_conter {
	    display: flex;
    	align-items: center;
	    padding: 13px 10px;
		border-bottom: 1px solid rgb(255, 255, 255, 0.1);
		span {
			display: inline-block;
			font-size: 12px;
			font-family: "HarmonyOS_Sans_SC_Light" !important;
		}
		i {
			position: relative;
			display: flex;
			align-items: center;
			justify-content: center;
			background: linear-gradient(105deg, #B45865, #4951CA);
			padding: 5px;
			border-radius: 5px;
			height: 25px;
			font-weight: 500;
			font-family: HarmonyOS_Sans_SC_Regular;
			color: #fff;
			cursor: pointer;
			&::before {
				content: '';
				position: absolute;
				top: 0;
				right: 0;
				left: 0;
				bottom: 0;
				z-index: -1;
				margin: -1px;
				border-radius: inherit;
				background: linear-gradient(-45deg, #5B60DA, #C47C88);
			}
		}
		em {
		    color: #ccc;
    		font-weight: bold;
		}
		dl {
			color: #ccc;
			font-weight: bold;
		}
	}
	.noData {
		font-size: 14px;
		font-weight: 500;
		color: #7E7B6F;
		margin: 50px 0;
		text-align: center;
	}
	.border_box {
		position: relative;
		border: 2px solid transparent;
		border-radius: 20px;
		background-color: #000;
		background-clip: padding-box;
		margin-bottom: 50px;
		&::before {
			content: '';
			position: absolute;
			top: 0;
			right: 0;
			left: 0;
			bottom: 0;
			z-index: -1;
			margin: -2px;
			border-radius: inherit;
			background: linear-gradient(to right, #843944, #454DC3);
		}
	}
	.tables_conter {
		span {
			position: relative;
			display: inline-block;
			width: 50%;
			text-align: center;
			font-size: 18px;
			color: #999999;
			font-weight: bold;
			font-family: HarmonyOS_Sans_SC_Bold;
			padding: 20px 0;
			cursor: pointer;
		}
		.on {
			color: #F5F5F5;
			em {
				position: absolute;
				bottom: 0px;
				left: 50%;
				margin-left: -20px;
				width: 40px;
				height: 4px;
				background: #682C2F;
				border-radius: 5px;
			}
		}
	}
	.tables_liang1 {
		position: absolute;
		img {
			width: 100%;
		}
	}
	.tables_liang2 {
		position: absolute;
		bottom: -10px;
		img {
			width: 100%;
		}
	}


	@media (max-width: 750px) {
		
	}
`;
function List(_ref) {
  let {
    loading,
    listData,
    modalConfirm
  } = _ref;
  const {
    i18n,
    t
  } = (0,es/* useTranslation */.Bd)();
  (0,react.useEffect)(() => {
    const language = localStorage.getItem('language');
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [i18n]);
  const ethereumHelper = window.ethereum || false;
  const web3 = new (web3_min_default())(ethereumHelper);
  const {
    address
  } = useGetOwnAddress();
  const {
    chain
  } = (0,wagmi_dist/* useNetwork */.AE)();
  const [messageApi, contextHolder] = message/* default */.Ay.useMessage();
  const [table, setTable] = (0,react.useState)(1);
  const [currentDate, setCurrentDate] = (0,react.useState)(Math.floor(Date.now() / 1000));
  const unRedeemed = listData.filter(item => !item.status);
  const redeemed = listData.filter(item => item.status);

  // 赎回
  const handleRed = async index => {
    const contract = new web3.eth.Contract(abiStaking, addressStakingContract[chain == null ? void 0 : chain.id]);

    // 获取gas费
    let gas = await web3.eth.getGasPrice();
    await contract.methods.unstake(index).send({
      from: address,
      gasPrice: gas
    }, (err, result) => {
      if (err) {
        messageApi.open({
          type: 'error',
          content: t('Redemption failed')
        });
        console.log('unstake err===>', err);
      } else {
        console.log('unstake result===>', result);
      }
    });
    messageApi.open({
      type: 'success',
      content: t('Redemption successful')
    });
    modalConfirm();
  };
  (0,react.useEffect)(() => {
    // 每秒更新 currentDate
    const timer = setInterval(() => {
      setCurrentDate(Math.floor(Date.now() / 1000));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // console.log("listData===>", listData)

  return /*#__PURE__*/react.createElement(list_CustomStyle, null, contextHolder, /*#__PURE__*/react.createElement("div", {
    className: "border_box"
  }, /*#__PURE__*/react.createElement("div", {
    className: "tables_liang1"
  }, /*#__PURE__*/react.createElement("img", {
    src: list_liang1_namespaceObject,
    alt: ""
  })), /*#__PURE__*/react.createElement("div", {
    className: "tables_liang2"
  }, /*#__PURE__*/react.createElement("img", {
    src: list_liang2_namespaceObject,
    alt: ""
  })), /*#__PURE__*/react.createElement("div", {
    className: "tables_conter"
  }, /*#__PURE__*/react.createElement("span", {
    className: table === 1 ? 'on' : '',
    onClick: () => setTable(1)
  }, t('Investment List'), table === 1 && /*#__PURE__*/react.createElement("em", null)), /*#__PURE__*/react.createElement("span", {
    className: table === 2 ? 'on' : '',
    onClick: () => setTable(2)
  }, t('Redemption List'), table === 2 && /*#__PURE__*/react.createElement("em", null))), table === 1 && /*#__PURE__*/react.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/react.createElement("div", {
    className: "tabs_title_conter"
  }, /*#__PURE__*/react.createElement("span", {
    className: "conts_wid1"
  }, t('Index')), /*#__PURE__*/react.createElement("span", {
    className: "conts_wid2"
  }, t('Date')), /*#__PURE__*/react.createElement("span", {
    className: "conts_wid3"
  }, t('Principal')), /*#__PURE__*/react.createElement("span", {
    className: "conts_wid4"
  }, t('Profit')), /*#__PURE__*/react.createElement("span", {
    className: "conts_wid5"
  }, t('Progress'))), address ? /*#__PURE__*/react.createElement("div", null, !loading ? /*#__PURE__*/react.createElement("div", null, unRedeemed.length > 0 ? unRedeemed.map((item, index) => /*#__PURE__*/react.createElement("div", {
    key: index
  }, !item.status && /*#__PURE__*/react.createElement("div", {
    className: "tabs_list_conter"
  }, /*#__PURE__*/react.createElement("span", {
    className: "conts_wid1 tabs_list_colo1"
  }, index + 1), /*#__PURE__*/react.createElement("span", {
    className: "conts_wid2 tabs_list_colo2"
  }, formatTimestamp(item.stakeTime * 1000, "MM-DD HH:mm"), /*#__PURE__*/react.createElement("br", null), item.endTime && /*#__PURE__*/react.createElement(CountdownTimestamp, {
    key: `${item.stakeTime}-${item.endTime}`,
    targetTimestamp: item.endTime
  })), /*#__PURE__*/react.createElement("span", {
    className: "conts_wid3 tabs_list_colo2"
  }, toFixedFloor((Number(item.amount) / 1e18).toString(), 2)), /*#__PURE__*/react.createElement(index_AnimatedProfit, {
    value: item.profit
  }), /*#__PURE__*/react.createElement("span", {
    className: "conts_wid5"
  },
  // 质押天数1天
  // 86400
  item.stakeIndex === "0" ? /*#__PURE__*/react.createElement("em", null, currentDate > item.stakeTime * 1 + 1 * 86400 ? /*#__PURE__*/react.createElement("i", {
    onClick: () => handleRed(item.index)
  }, t('Red')) : /*#__PURE__*/react.createElement("i", null, t('Pending'))) :
  // 质押天数15天
  item.stakeIndex === "1" ? /*#__PURE__*/react.createElement("em", null, currentDate > item.stakeTime * 1 + 15 * 86400 ? /*#__PURE__*/react.createElement("i", {
    onClick: () => handleRed(item.index)
  }, t('Red')) : /*#__PURE__*/react.createElement("i", null, t('Pending'))) :
  // 质押天数30天
  item.stakeIndex === "2" ? /*#__PURE__*/react.createElement("em", null, currentDate > item.stakeTime * 1 + 30 * 86400 ? /*#__PURE__*/react.createElement("i", {
    onClick: () => handleRed(item.index)
  }, t('Red')) : /*#__PURE__*/react.createElement("i", null, t('Pending'))) : /*#__PURE__*/react.createElement("i", null, t('Pending')))))) : /*#__PURE__*/react.createElement("div", {
    className: "noData"
  }, t('No data available'))) : /*#__PURE__*/react.createElement("div", {
    className: "noData"
  }, /*#__PURE__*/react.createElement(spin/* default */.A, {
    indicator: /*#__PURE__*/react.createElement(LoadingOutlined/* default */.A, {
      style: {
        fontSize: 28,
        color: "#9A9892"
      },
      spin: true
    })
  }))) : /*#__PURE__*/react.createElement("div", {
    className: "noData"
  }, t('No data available'))), table === 2 && /*#__PURE__*/react.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/react.createElement("div", {
    className: "tabs_title_conter"
  }, /*#__PURE__*/react.createElement("span", {
    className: "conts_wid1"
  }, t('Index')), /*#__PURE__*/react.createElement("span", {
    className: "conts_wid2"
  }, t('Date')), /*#__PURE__*/react.createElement("span", {
    className: "conts_wid3",
    style: {
      width: "40%"
    }
  }, t('Principal')), /*#__PURE__*/react.createElement("span", {
    className: "conts_wid5"
  }, t('Progress'))), address ? /*#__PURE__*/react.createElement("div", null, !loading ? /*#__PURE__*/react.createElement("div", null, redeemed.length > 0 ? redeemed.map((item, index) => /*#__PURE__*/react.createElement("div", {
    key: index
  }, item.status && /*#__PURE__*/react.createElement("div", {
    className: "tabs_list_conter"
  }, /*#__PURE__*/react.createElement("span", {
    className: "conts_wid1 tabs_list_colo1"
  }, index + 1), /*#__PURE__*/react.createElement("span", {
    className: "conts_wid2 tabs_list_colo2"
  }, formatTimestamp(item.stakeTime * 1000, "MM-DD HH:mm")), /*#__PURE__*/react.createElement("span", {
    className: "conts_wid3 tabs_list_colo2",
    style: {
      width: "40%"
    }
  }, toFixedFloor((Number(item.amount) / 1e18).toString(), 2)), /*#__PURE__*/react.createElement("span", {
    className: "conts_wid5"
  }, /*#__PURE__*/react.createElement("dl", null, t('Redeemed')))))) : /*#__PURE__*/react.createElement("div", {
    className: "noData"
  }, t('No data available'))) : /*#__PURE__*/react.createElement("div", {
    className: "noData"
  }, /*#__PURE__*/react.createElement(spin/* default */.A, {
    indicator: /*#__PURE__*/react.createElement(LoadingOutlined/* default */.A, {
      style: {
        fontSize: 28,
        color: "#9A9892"
      },
      spin: true
    })
  }))) : /*#__PURE__*/react.createElement("div", {
    className: "noData"
  }, t('No data available')))));
}
/* harmony default export */ const list = (List);
;// ./src/assets/images/assets_bg1.png
const assets_bg1_namespaceObject = __webpack_require__.p + "ed9e30136d5e1a1b986f.png";
;// ./src/assets/images/assets_bg2.png
const assets_bg2_namespaceObject = __webpack_require__.p + "55ed4af7e789c39d6adb.png";
;// ./src/assets/images/pool_zh_bg.png
const pool_zh_bg_namespaceObject = __webpack_require__.p + "54713c31cbf65f0af36d.png";
;// ./src/assets/images/pool_en_bg.png
const pool_en_bg_namespaceObject = __webpack_require__.p + "7ae07965ba5096d82ff6.png";
;// ./src/assets/images/assets_copy.png
const assets_copy_namespaceObject = __webpack_require__.p + "916f7c72e3ded2b3d408.png";
;// ./src/assets/images/banner1_en.png
const banner1_en_namespaceObject = __webpack_require__.p + "209655e4dcf64e7b703e.png";
;// ./src/assets/images/banner1_zh.png
const banner1_zh_namespaceObject = __webpack_require__.p + "45ee0b40a59349d9298d.png";
;// ./src/components/index/comm1.jsx
/* eslint-disable react-hooks/exhaustive-deps */
























// 100px 转换成 vw：屏幕宽度为1920的话，100 / 1920 * 100
// font-size: 20px; 用vw表示
// 20px = (20/1920) * 100vw = 1.04vw
// font-size: clamp(16px, 1.04vw, 20px);  最小 16px，最大 20px，
const comm1_CustomStyle = styled_components_browser_esm/* default */.Ay.div`
    margin: 0 15px;
	.comm1_assConter {
	    position: relative;
	}
	.comm1_assBgImg {
		width: 100%;
	}
	.comm1_assPosabg {
		position: absolute;
		top: 0px;
		width: 100%;
		height: 100%;
	}
	.comm1_asspconts {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 25%;
		span {
			font-size: 13px;
			font-size: clamp(13px, 1.3vw, 20px); 
    		color: #F5F5F5;
			font-weight: bold;
			font-family: HarmonyOS_Sans_SC_Bold;
		}
	}
	.comm1_assets_title {
		display: flex;
		align-items: center;
    	justify-content: center;
	}
	.comm1_assets_bspool {
	    position: absolute;
		width: 100%;
    	bottom: 10%;
	}
	.comm1_assets_balance {
		position: absolute;
		width: 100%;
		bottom: 50%;
		margin-bottom: -10px;
		text-align: center;
		span {
			font-size: 26px;
			font-weight: 500;
			font-family: 华文细黑;
		}
		em {
			color: #F5F5F5;
			font-size: 14px;
    		font-weight: 500;
			font-family: STHeiti-Light;
    		margin-left: 5px;
		}
	}
	.comm1_performance {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 20px 15px;
		span {
		    font-size: 16px;
    		color: #9A9892;
			font-weight: 500;
		}
		em {
			display: flex;
			font-size: 16px;
			color: #E0E0E0;
			font-weight: 500;
			font-family: 华文细黑;
		}
		i {
		    display: flex;
			align-items: center;
			justify-content: center;
			font-size: 16px;
			color: #E0E0E0;
			cursor: pointer;
		}
		img {
			width: 16px;
			margin-left: 5px;
		}
		dl {
			margin: 0px;
			font-family: HarmonyOS_Sans_SC_Light;
			margin-left: 5px;
		}
	}
	.comm1_banner {
		margin: 13px 0;
		img {
			width: 100%;
		}
	}
	.comm1_assets_pool_zh {
		display: flex;
		align-items: center;
		justify-content: end;
		padding-right: 17px;
		background: url(${pool_zh_bg_namespaceObject}) no-repeat;
		background-size: 100%;
		width: 116px;
    	height: 38px;
		font-size: 14px;
		color: #fff;
    	font-weight: 500;
		font-family: HarmonyOS_Sans_SC_Regular;
		margin: auto;
		cursor: pointer;
	}
	.comm1_assets_pool_en {
		display: flex;
		align-items: center;
		justify-content: end;
		padding-right: 10px;
		background: url(${pool_en_bg_namespaceObject}) no-repeat;
		background-size: 100%;
		width: 150px;
    	height: 45px;
		font-size: 14px;
		color: #fff;
    	font-weight: 500;
		font-family: HarmonyOS_Sans_SC_Regular;
		margin: auto;
		cursor: pointer;
	}
	.comm1_perconts {
		position: absolute;
		width: 100%;
		top: 50%;
		height: 70px;
		margin-top: -30px;
	}


	@media (max-width: 750px) {
		
	}
`;
function Comm1() {
  const {
    i18n,
    t
  } = (0,es/* useTranslation */.Bd)();
  (0,react.useEffect)(() => {
    const language = localStorage.getItem('language');
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [i18n]);
  const {
    signLoaded
  } = useOwnerLayout();
  const urlParams = new URLSearchParams(window.location.search);
  const invitation = urlParams.get('invitation');
  const ethereumHelper = window.ethereum || false;
  const web3 = new (web3_min_default())(ethereumHelper);
  const {
    address
  } = useGetOwnAddress();
  const {
    chain
  } = (0,wagmi_dist/* useNetwork */.AE)();
  const [messageApi, contextHolder] = message/* default */.Ay.useMessage();
  const [openModal, setOpenModal] = (0,react.useState)(false);
  const [myAssets, setMyAssets] = (0,react.useState)("0");
  const [myPerformance, setMyPerformance] = (0,react.useState)("0");
  const [referralContract, setReferralContract] = (0,react.useState)(""); // Referral合约地址
  const [dayAccountMax, setDayAccountMax] = (0,react.useState)(""); // 最大质押数量
  const [rootAddress, setRootAddress] = (0,react.useState)(""); // Root地址
  const [isBindReferral, setIsBindReferral] = (0,react.useState)(false); // 当前钱包地址是否质押
  const [isInvitationReferral, setIsInvitationReferral] = (0,react.useState)(false); // 邀请人地址是否质押
  const [loading, setLoading] = (0,react.useState)(true);
  const [listData, setListData] = (0,react.useState)([]); // 列表
  const [maxAmount, setMaxAmount] = (0,react.useState)("");
  const [prevAssets, setPrevAssets] = (0,react.useState)(myAssets);
  const handleCopy = () => {
    const url = window.location.origin + '?invitation=' + address;
    if (copy_to_clipboard_default()(url)) {
      messageApi.open({
        type: 'success',
        content: t('Copy successful')
      });
    }
  };

  // 查询Referral合约地址、最大质押数量、每天已经质押数量
  const handleReferralContract = async () => {
    try {
      var _chain$id;
      const contract = new web3.eth.Contract(abiStaking, addressStakingContract[(_chain$id = chain == null ? void 0 : chain.id) != null ? _chain$id : 56]);
      if (address && contract) {
        // 查询Referral合约地址
        let referralContract = await contract.methods.REFERRAL().call();
        setReferralContract(referralContract);

        // 每天最大质押数量
        let perDayAccountMax = await contract.methods.maxStakeAmount().call();
        const perDayAccountMaxBig = new bignumber/* default */.A(perDayAccountMax.toString()).shiftedBy(-18).toString();
        setDayAccountMax(perDayAccountMaxBig);
      }
    } catch (error) {
      console.log('contract error===>', error);
    }
  };

  // 查询root地址、当前钱包地址是否质押、邀请人地址是否质押
  const handleIsBindReferral = async () => {
    try {
      const contract = new web3.eth.Contract(abiReferral, referralContract);
      if (address && contract) {
        // root地址
        let getRootAddress = await contract.methods.getRootAddress().call();
        setRootAddress(getRootAddress);

        // 查询当前钱包地址是否质押
        let isReferral = await contract.methods.isBindReferral(address).call();
        setIsBindReferral(isReferral);

        // 邀请人地址是否质押
        let isInvitationReferral;
        if (invitation) {
          isInvitationReferral = await contract.methods.isBindReferral(invitation).call();
          setIsInvitationReferral(isInvitationReferral);
        }
        if (!isReferral) {
          if (invitation === "" || !isInvitationReferral) {
            messageApi.open({
              type: 'error',
              content: t('Please use a valid invitation link.')
            });
          }
        }
      }
    } catch (error) {
      console.log('contract error===>', error);
    }
  };

  // 我的资产
  const handleMyAssets = async () => {
    try {
      var _chain$id2;
      const contract = new web3.eth.Contract(abiStaking, addressStakingContract[(_chain$id2 = chain == null ? void 0 : chain.id) != null ? _chain$id2 : 56]);
      if (address && contract) {
        // 我的资产
        const balance = await contract.methods.balanceOf(address).call();
        const balanceBig = new bignumber/* default */.A(balance.toString()).shiftedBy(-18).toString();
        setMyAssets(balanceBig);
      }
    } catch (error) {
      console.log('contract error===>', error);
    }
  };

  // 我的业绩
  const handleMyKpi = async () => {
    try {
      var _chain$id3;
      const contract = new web3.eth.Contract(abiStaking, addressStakingContract[(_chain$id3 = chain == null ? void 0 : chain.id) != null ? _chain$id3 : 56]);
      if (address && contract) {
        // 业绩
        const getTeamKpi = await contract.methods.getTeamKpi(address).call();
        const getTeamKpiBig = new bignumber/* default */.A(getTeamKpi.toString()).shiftedBy(-18).toString();
        setMyPerformance(getTeamKpiBig);
      }
    } catch (error) {
      console.log('contract error===>', error);
    }
  };

  // 查询投资列表、赎回列表
  const handleListData = async () => {
    try {
      var _chain$id4;
      const contract = new web3.eth.Contract(abiStaking, addressStakingContract[(_chain$id4 = chain == null ? void 0 : chain.id) != null ? _chain$id4 : 56]);
      if (address && contract) {
        // 总共质押条数
        const stakeCount = await contract.methods.stakeCount(address).call();
        // console.log("stakeCount===>", stakeCount)

        const records = [];
        for (let i = 0; i < stakeCount; i++) {
          const record = await contract.methods.userStakeRecord(address, i).call();
          // console.log("record===>", record)
          let profit;
          if (record.status) {
            // 已赎回
            // const unstakeRewards = await contract.methods.unstakeRewards(address, i).call();
            // profit = new BigNumberjs(unstakeRewards.toString()).shiftedBy(-18).toString();
          } else {
            const rewardOfSlot = await contract.methods.rewardOfSlot(address, i).call();
            profit = new bignumber/* default */.A(rewardOfSlot.toString()).shiftedBy(-18).toString();
          }
          let endTime;
          if (record.stakeIndex === "0") {
            // 质押天数1天								
            endTime = Number(record.stakeTime * 1 + 1 * 86400);
          } else if (record.stakeIndex === "1") {
            // 质押天数15天
            endTime = Number(record.stakeTime * 1 + 15 * 86400);
          } else if (record.stakeIndex === "2") {
            // 质押天数30天
            endTime = Number(record.stakeTime * 1 + 30 * 86400);
          }
          records.push({
            ...record,
            index: i,
            // 序号
            profit,
            // 盈利
            endTime // 结束时间
          });
        }
        // console.log("records===>", records);
        setListData(records.reverse());
        setLoading(false);
      }
    } catch (error) {
      console.log('contract error===>', error);
    }
  };
  (0,react.useEffect)(() => {
    if (address && signLoaded) {
      const timer = setInterval(() => {
        handleMyAssets(); // 我的资产
      }, 3000);
      return () => clearInterval(timer);
    }
  }, [address, signLoaded]);
  (0,react.useEffect)(() => {
    if (address && signLoaded) {
      // handleListData();	// 查询投资列表、赎回列表
      const timerlist = setInterval(() => {
        handleListData(); // 查询投资列表、赎回列表
      }, 3000);
      return () => clearInterval(timerlist);
    }
  }, [address, signLoaded]);
  (0,react.useEffect)(() => {
    if (address && signLoaded) {
      handleReferralContract(); // 查询Referral合约地址、最大质押数量、每天已经质押数量
      handleMyKpi(); // 我的业绩
    }
  }, [address, signLoaded]);
  (0,react.useEffect)(() => {
    if (address && referralContract && signLoaded) {
      handleIsBindReferral(); // 查询root地址、当前钱包地址是否质押、邀请人地址是否质押
    }
  }, [address, referralContract, signLoaded]);
  const modalConfirm = () => {
    handleMyAssets(); // 我的资产
    handleListData(); // 查询投资列表、赎回列表
    handleIsBindReferral(); // 查询root地址、当前钱包地址是否质押、邀请人地址是否质押
    handleReferralContract(); // 查询Referral合约地址、最大质押数量、每天已经质押数量
  };
  const handleOpenModal = async () => {
    setOpenModal(true);

    // 查询单笔最多质押数量
    try {
      var _chain$id5;
      const contract = new web3.eth.Contract(abiStaking, addressStakingContract[(_chain$id5 = chain == null ? void 0 : chain.id) != null ? _chain$id5 : 56]);
      if (address && contract) {
        let maxStakeAmount = await contract.methods.maxStakeAmount().call();
        const maxStakeAmountBig = new bignumber/* default */.A(maxStakeAmount.toString()).shiftedBy(-18).toString();
        setMaxAmount(maxStakeAmountBig);
      }
    } catch (error) {
      console.log('contract error===>', error);
    }
  };
  (0,react.useEffect)(() => {
    // 当 myAssets 改变时更新上一次的值
    setPrevAssets(prev => prev !== myAssets ? prev : prevAssets);
  }, [myAssets]);
  return /*#__PURE__*/react.createElement(comm1_CustomStyle, null, contextHolder, /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("div", {
    className: "comm1_assConter"
  }, /*#__PURE__*/react.createElement("img", {
    src: assets_bg1_namespaceObject,
    alt: "",
    className: "comm1_assBgImg"
  }), /*#__PURE__*/react.createElement("div", {
    className: "comm1_assPosabg"
  }, /*#__PURE__*/react.createElement("div", {
    className: "comm1_asspconts"
  }, /*#__PURE__*/react.createElement("span", null, t('My current assets'))), /*#__PURE__*/react.createElement("div", {
    className: "comm1_assets_balance"
  }, myAssets !== "0" ? /*#__PURE__*/react.createElement(build/* default */.Ay, {
    start: prevAssets,
    end: myAssets,
    duration: 2.0,
    separator: ",",
    decimals: 10,
    decimal: ".",
    prefix: "",
    preserveValue: true,
    style: {
      fontFamily: "华文细黑",
      display: "inline-block",
      minWidth: "7ch",
      // 固定最小宽度，避免宽度跳动
      textAlign: "right"
    }
  }) : /*#__PURE__*/react.createElement("span", null, toFixedFloor(myAssets, 10)), /*#__PURE__*/react.createElement("em", null, "Token")), /*#__PURE__*/react.createElement("div", {
    className: "comm1_assets_bspool"
  }, i18n.language === 'en' ? /*#__PURE__*/react.createElement("div", {
    className: "comm1_assets_pool_en",
    onClick: handleOpenModal
  }, /*#__PURE__*/react.createElement("span", null, t('Donation pool'))) : /*#__PURE__*/react.createElement("div", {
    className: "comm1_assets_pool_zh",
    onClick: handleOpenModal
  }, /*#__PURE__*/react.createElement("span", null, t('Donation pool')))))), /*#__PURE__*/react.createElement("div", {
    className: "comm1_assConter",
    style: {
      marginTop: "-4px"
    }
  }, /*#__PURE__*/react.createElement("img", {
    src: assets_bg2_namespaceObject,
    alt: "",
    className: "comm1_assBgImg"
  }), /*#__PURE__*/react.createElement("div", {
    className: "comm1_perconts"
  }, /*#__PURE__*/react.createElement("div", {
    className: "comm1_performance"
  }, /*#__PURE__*/react.createElement("span", null, t('Performance')), /*#__PURE__*/react.createElement("em", null, toFixedFloor(myPerformance, 8), " ", /*#__PURE__*/react.createElement("dl", null, "Token"))), /*#__PURE__*/react.createElement("div", {
    className: "comm1_performance"
  }, /*#__PURE__*/react.createElement("span", null, t('Link')), address ? /*#__PURE__*/react.createElement("i", null, isBindReferral || address === rootAddress ? /*#__PURE__*/react.createElement("i", {
    onClick: handleCopy
  }, address.substring(0, 6), "****", address.substr(-4), /*#__PURE__*/react.createElement("img", {
    src: assets_copy_namespaceObject,
    alt: ""
  })) : /*#__PURE__*/react.createElement("i", null, "-")) : /*#__PURE__*/react.createElement("em", null, "-"))))), /*#__PURE__*/react.createElement("div", {
    className: "comm1_banner"
  }, i18n.language === 'en' ? /*#__PURE__*/react.createElement("img", {
    src: banner1_en_namespaceObject,
    alt: ""
  }) : /*#__PURE__*/react.createElement("img", {
    src: banner1_zh_namespaceObject,
    alt: ""
  })), /*#__PURE__*/react.createElement(list, {
    loading: loading,
    listData: listData,
    modalConfirm: modalConfirm
  }), openModal && /*#__PURE__*/react.createElement(addPollModal, {
    modalOpen: openModal,
    modalConfirm: modalConfirm,
    modalCancel: () => setOpenModal(false),
    invitation: invitation,
    isBindReferral: isBindReferral,
    isInvitationReferral: isInvitationReferral,
    dayAccountMax: dayAccountMax,
    maxAmount: maxAmount
  }));
}
/* harmony default export */ const comm1 = (Comm1);
;// ./src/pages/index/index.jsx


function Index() {
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(comm1, null));
}
/* harmony default export */ const index = (Index);
;// ./src/pages/app.jsx











const metaMaskConnector = new metaMask/* MetaMaskConnector */.j({
  chains: chains,
  options: {
    shimDisconnect: false,
    shimChainChangedDisconnect: true
  }
});
const injectedConnector = new chunk_2VZS2JHJ/* InjectedConnector */.s({
  chains: chains,
  options: {
    shimDisconnect: false,
    shimChainChangedDisconnect: true
  }
});
const app_client = (0,wagmi_dist/* createClient */.UU)({
  autoConnect: true,
  provider: provider,
  connectors: [metaMaskConnector, injectedConnector]
});
function App() {
  const [ready, setReady] = (0,react.useState)(false);
  (0,react.useEffect)(() => {
    setReady(true);
  }, []);
  return /*#__PURE__*/react.createElement(react.Fragment, null, ready ? /*#__PURE__*/react.createElement(wagmi_dist/* WagmiConfig */.qZ, {
    client: app_client,
    className: `${"Index"}`
  }, /*#__PURE__*/react.createElement(index_esm/* HelmetProvider */.vd, null, /*#__PURE__*/react.createElement(UserProvider, null, /*#__PURE__*/react.createElement(dist/* BrowserRouter */.Kd, null, /*#__PURE__*/react.createElement(header, null), /*#__PURE__*/react.createElement(react_router_dist/* Routes */.BV, null, /*#__PURE__*/react.createElement(react_router_dist/* Route */.qh, {
    exact: true,
    path: "/",
    element: /*#__PURE__*/react.createElement(index, null)
  }), /*#__PURE__*/react.createElement(react_router_dist/* Route */.qh, {
    path: "/index",
    element: /*#__PURE__*/react.createElement(index, null)
  }), /*#__PURE__*/react.createElement(react_router_dist/* Route */.qh, {
    path: "*",
    element: /*#__PURE__*/react.createElement(index, null)
  })))))) : null);
}
/* harmony default export */ const app = (App);
// EXTERNAL MODULE: ./node_modules/dayjs/locale/zh-cn.js
var zh_cn = __webpack_require__(6033);
// EXTERNAL MODULE: ./src/assets/css/common.css
var common = __webpack_require__(7566);
;// ./src/index.jsx





if (typeof BigInt === 'undefined') {
  window.BigInt = function (n) {
    return Number(n);
  };
}
const root = client.createRoot(document.getElementById("root"));
root.render(/*#__PURE__*/react.createElement(app, null));

/***/ }),

/***/ 5372:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"Connect":"连接钱包","Home":"首页","Address":"地址","Select Language":"选择语言","My Assets":"我的资产","Donation pool":"捐赠底池","Performance":"业绩","Link":"链接","Investment List":"投资列表","Redemption List":"赎回列表","Index":"序号","Date":"日期","Principal":"本金","Profit":"盈利","Progress":"进展","Redemption":"赎回","Pending":"等待赎回","Redeemed":"已赎回","Add Asset":"增加资产","Please enter the amount to add":"请输入增加金额","Max":"最大：","Please select the number of days":"请选择天数","Please select":"请选择","Confirm":"确认","Balance":"余额：","Approve":"授权","Copy successful":"复制成功","Pool added successfully":"底池添加成功","Pool added failed":"底池添加失败","Insufficient balance":"余额不足","Red":"赎回","Days":"天","CI":"，复利","Please connect wallet first":"请先连接钱包","No data available":"暂无数据","Invitation Link":"邀请链接","Please donate the bottom pool through the invitation link":"请通过邀请链接进行捐赠底池","The inviter has not donated the bottom pool, so you cannot donate the bottom pool temporarily":"邀请人没有捐赠底池，您暂不能捐赠底池","Redemption successful":"赎回成功","Redemption failed":"赎回失败","Maximum single pledge amount":"单笔最大质押金额：","Cannot exceed the maximum pledged amount":"不能大于最大质押金额","Please use a valid invitation link.":"请使用有效邀请链接。","Maximum daily pledge amount":"每日最大质押金额：","My current assets":"我的当前资产","Select Days":"请选择天数","Please select the staking period":"请选择质押时间","Compound":"，复利","Cancel":"取消","Confirms":"确定","Hours":"小时","Please refresh the page to sign":"请刷新页面进行签名","":""}');

/***/ }),

/***/ 7566:
/***/ (() => {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 7790:
/***/ (() => {

/* (ignored) */

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/amd options */
/******/ 	(() => {
/******/ 		__webpack_require__.amdO = {};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; (typeof current == 'object' || typeof current == 'function') && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			792: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunktoken"] = self["webpackChunktoken"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [135], () => (__webpack_require__(3358)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;