/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 969:
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
// EXTERNAL MODULE: ./node_modules/@ant-design/cssinjs/es/index.js + 36 modules
var es = __webpack_require__(3701);
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
var dist_es = __webpack_require__(2389);
;// ./i18n.ts



const resources = {
  en: {
    translation: __webpack_require__(2038),
  },
  zhCN: {
    translation: __webpack_require__(5372),
  },
}

i18next/* default.use */.Ay.use(dist_es/* initReactI18next */.r9).init({
  resources,
  lng: "en",
})

/* harmony default export */ const i18n_0 = ((/* unused pure expression or super */ null && (i18n)));

// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 3 modules
var styled_components_browser_esm = __webpack_require__(7618);
// EXTERNAL MODULE: ./node_modules/web3/dist/web3.min.js
var web3_min = __webpack_require__(6450);
var web3_min_default = /*#__PURE__*/__webpack_require__.n(web3_min);
// EXTERNAL MODULE: ./node_modules/bignumber.js/bignumber.mjs
var bignumber = __webpack_require__(346);
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
;// ./src/config/const/address.ts
const addressUsdtToken = {
  56: '0x55d398326f99059fF775485246999027B3197955',
  97: '0x44004827f2F72566E12884A38f63f72F2a5143ea'
};
const addressStakingContract = {
  56: '',
  97: '0x7110673a4e87ea0402e53ec20fb5969c163131e2'
};
;// ./src/config/abi/erc20.json
const erc20_namespaceObject = /*#__PURE__*/JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]');
;// ./src/config/abi/staking_abi.json
const staking_abi_namespaceObject = /*#__PURE__*/JSON.parse('[{"inputs":[{"internalType":"address","name":"REFERRAL_","type":"address"},{"internalType":"address","name":"marketingAddress_","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"x","type":"uint256"},{"internalType":"uint256","name":"y","type":"uint256"}],"name":"PRBMath_MulDiv18_Overflow","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"},{"indexed":false,"internalType":"uint40","name":"timestamp","type":"uint40"},{"indexed":false,"internalType":"uint256","name":"index","type":"uint256"}],"name":"RewardPaid","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"index","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"stakeTime","type":"uint256"}],"name":"Staked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"Genius","outputs":[{"internalType":"contract IGenius","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"REFERRAL","outputs":[{"internalType":"contract IReferral","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"balance","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balances","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"dayAccountStakeMaxAmounts","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"dayStakeMaxAmounts","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"emergencyWithdrawGenius","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getTeamKpi","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isOpen","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"isPreacher","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxStakeAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"network1In","outputs":[{"internalType":"uint256","name":"value","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"perDayAccountMax","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"perDayMax","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"uint8","name":"index","type":"uint8"}],"name":"rewardOfSlot","outputs":[{"internalType":"uint256","name":"reward","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_Genius","type":"address"}],"name":"setGenius","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"}],"name":"setMarketingAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_perDayMax","type":"uint256"},{"internalType":"uint256","name":"_perDayAccountMax","type":"uint256"}],"name":"setMax","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_isOpen","type":"bool"}],"name":"setOpen","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"setTeamVirtuallyInvestValue","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint160","name":"_amount","type":"uint160"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"uint8","name":"_stakeIndex","type":"uint8"}],"name":"stake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"stakeCount","outputs":[{"internalType":"uint256","name":"count","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint160","name":"_amount","type":"uint160"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"uint8","name":"_stakeIndex","type":"uint8"},{"internalType":"address","name":"parent","type":"address"}],"name":"stakeWithInviter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"sync","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"t_supply","outputs":[{"internalType":"uint40","name":"stakeTime","type":"uint40"},{"internalType":"uint160","name":"tamount","type":"uint160"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"teamTotalInvestValue","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"teamVirtuallyInvestValue","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"unstake","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"unstakeRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"userStakeRecord","outputs":[{"internalType":"uint40","name":"stakeTime","type":"uint40"},{"internalType":"uint160","name":"amount","type":"uint160"},{"internalType":"bool","name":"status","type":"bool"},{"internalType":"uint8","name":"stakeIndex","type":"uint8"}],"stateMutability":"view","type":"function"}]');
;// ./src/config/abi/referral_abi.json
const referral_abi_namespaceObject = /*#__PURE__*/JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MANAGER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"_children","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"_referralOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_referral","type":"address"},{"internalType":"address","name":"_user","type":"address"}],"name":"bindReferral","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"getReferral","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"getReferralCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"},{"internalType":"uint256","name":"_num","type":"uint256"}],"name":"getReferrals","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getRootAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"isBindReferral","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"root","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_newRoot","type":"address"}],"name":"setRootAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"}]');
;// ./src/config/const/index.ts



const abiErc20 = erc20_namespaceObject;
const abiStaking = staking_abi_namespaceObject;
const abiReferral = referral_abi_namespaceObject;
// EXTERNAL MODULE: ./node_modules/antd/es/modal/index.js + 33 modules
var modal = __webpack_require__(4654);
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
  } = (0,dist_es/* useTranslation */.Bd)();
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
;// ./src/assets/images/logo.svg
const logo_namespaceObject = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTA3IiBoZWlnaHQ9IjMyIiB2aWV3Qm94PSIwIDAgMTA3IDMyIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNNC43MDAyIDQuNjg1NjdDMTAuOTY4IC0xLjU2MjYyIDIxLjEzMDggLTEuNTYxODIgMjcuMzk4NCA0LjY4NjY1QzI4LjQxNDUgNS42OTk2OCAyOS4yNjM2IDYuODE2MTMgMjkuOTUwMiA4LjAwMDEySDI0LjIzNDRDMjQuMjA3OCA3Ljk3MzA2IDI0LjE4MzIgNy45NDM5NyAyNC4xNTYyIDcuOTE3MTFDMTkuNjc4OSAzLjQ1Mzc2IDEyLjQxODcgMy40NTQ2IDcuOTQxNDEgNy45MTgwOUMzLjQ2NDQ0IDEyLjM4MTcgMy40NjQ0NyAxOS42MTg2IDcuOTQxNDEgMjQuMDgyMkMxMi40MTg3IDI4LjU0NTcgMTkuNjc4OSAyOC41NDY1IDI0LjE1NjIgMjQuMDgzMUMyNS45MTI0IDIyLjMzMjMgMjYuOTc0MiAyMC4xNTM1IDI3LjM1MjUgMTcuODgzOUgyMy41NDFDMjIuNjkwNCAyMC45MDMyIDE5Ljg4OTMgMjMuMTE5MyAxNi41NjI1IDIzLjExOTNDMTIuNTYxMyAyMy4xMTkgOS4zMTczOCAxOS45MTM3IDkuMzE3MzggMTUuOTYwMUM5LjMxNzY1IDEyLjAwNjcgMTIuNTYxNSA4LjgwMTIxIDE2LjU2MjUgOC44MDA5QzE5LjgwOTUgOC44MDA5IDIyLjU1NzcgMTAuOTEyIDIzLjQ3ODUgMTMuODIwNEgzMi4wMDFWMTcuODgzOUgzMS45ODM0QzMxLjU3NTkgMjEuMzI5OCAzMC4wNTA0IDI0LjY2OTUgMjcuMzk4NCAyNy4zMTM2QzIxLjEzMDggMzMuNTYyMSAxMC45NjggMzMuNTYyOSA0LjcwMDIgMjcuMzE0NkMtMS41NjczNSAyMS4wNjYgLTEuNTY3NDMgMTAuOTM0MiA0LjcwMDIgNC42ODU2N1pNMTYuNTYwNSAxMi44NTE3QzE0Ljc5ODMgMTIuODUxOSAxMy4zNjkzIDE0LjI2MTcgMTMuMzY5MSAxNi4wMDAxQzEzLjM2OTQgMTcuNzM4NSAxNC43OTgzIDE5LjE0NzQgMTYuNTYwNSAxOS4xNDc2QzE4LjMyMjggMTkuMTQ3NCAxOS43NTE3IDE3LjczODUgMTkuNzUyIDE2LjAwMDFDMTkuNzUxOCAxNC4yNjE3IDE4LjMyMjggMTIuODUxOSAxNi41NjA1IDEyLjg1MTdaIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfMTYxM183NzApIi8+CjxwYXRoIGQ9Ik00NS43NjM3IDIyLjMzMkM0NC43MTU1IDIyLjMzMiA0My43NzQ3IDIyLjE2MjggNDIuOTQxNCAyMS44MjQyQzQyLjEwODEgMjEuNDg1NyA0MS4zOTg0IDIwLjk5NzQgNDAuODEyNSAyMC4zNTk0QzQwLjIyNjYgMTkuNzE0OCAzOS43NzczIDE4LjkzNjggMzkuNDY0OCAxOC4wMjU0QzM5LjE1MjMgMTcuMTEzOSAzOC45OTYxIDE2LjA4NTMgMzguOTk2MSAxNC45Mzk1VjE0LjkyOTdDMzguOTk2MSAxMy40MTkzIDM5LjI2OTUgMTIuMTEzOSAzOS44MTY0IDExLjAxMzdDNDAuMzYzMyA5LjkxMzQxIDQxLjEzOCA5LjA2NzA2IDQyLjE0MDYgOC40NzQ2MUM0My4xNDMyIDcuODc1NjUgNDQuMzI4MSA3LjU3NjE3IDQ1LjY5NTMgNy41NzYxN0M0Ni44MDg2IDcuNTc2MTcgNDcuODAxNCA3Ljc3Nzk5IDQ4LjY3MzggOC4xODE2NEM0OS41NTI3IDguNTc4NzggNTAuMjY4OSA5LjEyODkxIDUwLjgyMjMgOS44MzIwM0M1MS4zODIyIDEwLjUzNTIgNTEuNzMzNyAxMS4zNDkgNTEuODc3IDEyLjI3MzRMNTEuODg2NyAxMi4zODA5SDQ4Ljk1N0w0OC45Mjc3IDEyLjI5M0M0OC43MjU5IDExLjU4OTggNDguMzQxOCAxMS4wNDYyIDQ3Ljc3NTQgMTAuNjYyMUM0Ny4yMDkgMTAuMjcxNSA0Ni41MTU2IDEwLjA3NjIgNDUuNjk1MyAxMC4wNzYyQzQ0LjkzMzYgMTAuMDc2MiA0NC4yNzYgMTAuMjcxNSA0My43MjI3IDEwLjY2MjFDNDMuMTc1OCAxMS4wNDYyIDQyLjc1MjYgMTEuNTk5NiA0Mi40NTMxIDEyLjMyMjNDNDIuMTUzNiAxMy4wMzg0IDQyLjAwMzkgMTMuODk3OCA0Mi4wMDM5IDE0LjkwMDRWMTQuOTE5OUM0Mi4wMDM5IDE1LjY4MTYgNDIuMDkxOCAxNi4zNjUyIDQyLjI2NzYgMTYuOTcwN0M0Mi40NDM0IDE3LjU3NjIgNDIuNjk3MyAxOC4wOTM4IDQzLjAyOTMgMTguNTIzNEM0My4zNjc4IDE4Ljk0NjYgNDMuNzY4MiAxOS4yNzIxIDQ0LjIzMDUgMTkuNUM0NC42OTkyIDE5LjcyMTQgNDUuMjI2NiAxOS44MzIgNDUuODEyNSAxOS44MzJDNDYuNDU3IDE5LjgzMiA0Ny4wMjM0IDE5LjcxMTYgNDcuNTExNyAxOS40NzA3QzQ4LjAwNjUgMTkuMjIzMyA0OC4zOTM5IDE4Ljg4MTUgNDguNjczOCAxOC40NDUzQzQ4Ljk2MDMgMTguMDAyNiA0OS4xMTMzIDE3LjQ4NSA0OS4xMzI4IDE2Ljg5MjZMNDkuMTQyNiAxNi42NDg0SDQ2LjA1NjZWMTQuNDgwNUg1Mi4wMTM3VjE2LjIyODVDNTIuMDEzNyAxNy4xNzI1IDUxLjg3MDQgMTguMDIyMSA1MS41ODQgMTguNzc3M0M1MS4yOTc1IDE5LjUyNiA1MC44ODA5IDIwLjE2NzMgNTAuMzM0IDIwLjcwMTJDNDkuNzkzNiAyMS4yMjg1IDQ5LjEzNjEgMjEuNjMyMiA0OC4zNjEzIDIxLjkxMjFDNDcuNTkzMSAyMi4xOTIxIDQ2LjcyNzIgMjIuMzMyIDQ1Ljc2MzcgMjIuMzMyWk01OS4xMDM1IDIyLjIyNDZDNTguMDE2MyAyMi4yMjQ2IDU3LjA4MiAyMiA1Ni4zMDA4IDIxLjU1MDhDNTUuNTE5NSAyMS4xMDE2IDU0LjkxNzMgMjAuNDYzNSA1NC40OTQxIDE5LjYzNjdDNTQuMDc3NSAxOC44MDM0IDUzLjg2OTEgMTcuODE3MSA1My44NjkxIDE2LjY3NzdWMTYuNjY4QzUzLjg2OTEgMTUuNTM1MiA1NC4wNzc1IDE0LjU1MjEgNTQuNDk0MSAxMy43MTg4QzU0LjkxNzMgMTIuODc4OSA1NS41MDk4IDEyLjIzMTEgNTYuMjcxNSAxMS43NzU0QzU3LjAzOTcgMTEuMzE5NyA1Ny45NDQ3IDExLjA5MTggNTguOTg2MyAxMS4wOTE4QzYwLjAyOCAxMS4wOTE4IDYwLjkyNjQgMTEuMzEzMiA2MS42ODE2IDExLjc1NTlDNjIuNDM2OCAxMi4xOTg2IDYzLjAxOTUgMTIuODIzNiA2My40Mjk3IDEzLjYzMDlDNjMuODM5OCAxNC40MzE2IDY0LjA0NDkgMTUuMzcyNCA2NC4wNDQ5IDE2LjQ1MzFWMTcuMzMySDU1LjI4NTJWMTUuNTQ0OUg2Mi42ODc1TDYxLjMzOTggMTcuMjM0NFYxNi4xMDE2QzYxLjMzOTggMTUuNDcwMSA2MS4yNDIyIDE0LjkzOTUgNjEuMDQ2OSAxNC41MDk4QzYwLjg1MTYgMTQuMDgwMSA2MC41ODE0IDEzLjc1NzggNjAuMjM2MyAxMy41NDNDNTkuODkxMyAxMy4zMjgxIDU5LjQ5MDkgMTMuMjIwNyA1OS4wMzUyIDEzLjIyMDdDNTguNTc5NCAxMy4yMjA3IDU4LjE3NTggMTMuMzMxNCA1Ny44MjQyIDEzLjU1MjdDNTcuNDcyNyAxMy43NzQxIDU3LjE5NiAxNC4wOTk2IDU2Ljk5NDEgMTQuNTI5M0M1Ni43OTIzIDE0Ljk1OSA1Ni42OTE0IDE1LjQ4MzEgNTYuNjkxNCAxNi4xMDE2VjE3LjI0NDFDNTYuNjkxNCAxNy44NDMxIDU2Ljc4OTEgMTguMzU0MiA1Ni45ODQ0IDE4Ljc3NzNDNTcuMTg2MiAxOS4yMDA1IDU3LjQ3MjcgMTkuNTI2IDU3Ljg0MzggMTkuNzUzOUM1OC4yMTQ4IDE5Ljk4MTggNTguNjU0MyAyMC4wOTU3IDU5LjE2MjEgMjAuMDk1N0M1OS41NzIzIDIwLjA5NTcgNTkuOTIwNiAyMC4wMzM5IDYwLjIwNyAxOS45MTAyQzYwLjUgMTkuNzg2NSA2MC43Mzc2IDE5LjY0IDYwLjkxOTkgMTkuNDcwN0M2MS4xMDIyIDE5LjI5NDkgNjEuMjI1OSAxOS4xMzIyIDYxLjI5MSAxOC45ODI0TDYxLjMxMDUgMTguOTIzOEg2My45NTdMNjMuOTM3NSAxOS4wMzEyQzYzLjg1MjkgMTkuMzc2MyA2My42OTk5IDE5LjczNzYgNjMuNDc4NSAyMC4xMTUyQzYzLjI1NzIgMjAuNDg2MyA2Mi45NTEyIDIwLjgzMTQgNjIuNTYwNSAyMS4xNTA0QzYyLjE3NjQgMjEuNDY5NCA2MS42OTc5IDIxLjcyOTggNjEuMTI1IDIxLjkzMTZDNjAuNTUyMSAyMi4xMjcgNTkuODc4MyAyMi4yMjQ2IDU5LjEwMzUgMjIuMjI0NlpNNjYuMTY0MSAyMlYxMS4zMTY0SDY5LjAxNTZWMTIuOTg2M0g2OS4xNjIxQzY5LjQxNiAxMi40MDA0IDY5LjgwMzQgMTEuOTM4MiA3MC4zMjQyIDExLjU5OTZDNzAuODUxNiAxMS4yNjExIDcxLjUwMjYgMTEuMDkxOCA3Mi4yNzczIDExLjA5MThDNzMuNDYyMiAxMS4wOTE4IDc0LjM2NzIgMTEuNDQwMSA3NC45OTIyIDEyLjEzNjdDNzUuNjIzNyAxMi44MzMzIDc1LjkzOTUgMTMuODE5NyA3NS45Mzk1IDE1LjA5NTdWMjJINzMuMDg3OVYxNS43MzA1QzczLjA4NzkgMTQuOTg4MyA3Mi45MjUxIDE0LjQyNTEgNzIuNTk5NiAxNC4wNDFDNzIuMjgwNiAxMy42NTA0IDcxLjc4OTEgMTMuNDU1MSA3MS4xMjUgMTMuNDU1MUM3MC42ODg4IDEzLjQ1NTEgNzAuMzExMiAxMy41NTI3IDY5Ljk5MjIgMTMuNzQ4QzY5LjY3OTcgMTMuOTQzNCA2OS40Mzg4IDE0LjIyMDEgNjkuMjY5NSAxNC41NzgxQzY5LjEwMDMgMTQuOTI5NyA2OS4wMTU2IDE1LjM0NjQgNjkuMDE1NiAxNS44MjgxVjIySDY2LjE2NDFaTTc4LjQ5OCAyMlYxMS4zMTY0SDgxLjM0OTZWMjJINzguNDk4Wk03OS45MjM4IDkuNzM0MzhDNzkuNDk0MSA5LjczNDM4IDc5LjEyMyA5LjU4MTM4IDc4LjgxMDUgOS4yNzUzOUM3OC40OTggOC45Njk0IDc4LjM0MTggOC42MDQ4MiA3OC4zNDE4IDguMTgxNjRDNzguMzQxOCA3Ljc0NTQ0IDc4LjQ5OCA3LjM3NzYgNzguODEwNSA3LjA3ODEyQzc5LjEyMyA2Ljc3MjE0IDc5LjQ5NDEgNi42MTkxNCA3OS45MjM4IDYuNjE5MTRDODAuMzY2NSA2LjYxOTE0IDgwLjc0MDkgNi43NzIxNCA4MS4wNDY5IDcuMDc4MTJDODEuMzU5NCA3LjM3NzYgODEuNTE1NiA3Ljc0NTQ0IDgxLjUxNTYgOC4xODE2NEM4MS41MTU2IDguNjA0ODIgODEuMzU5NCA4Ljk2OTQgODEuMDQ2OSA5LjI3NTM5QzgwLjc0MDkgOS41ODEzOCA4MC4zNjY1IDkuNzM0MzggNzkuOTIzOCA5LjczNDM4Wk04Ny41NTA4IDIyLjIyNDZDODYuNzU2NSAyMi4yMjQ2IDg2LjA4OTIgMjIuMDY4NCA4NS41NDg4IDIxLjc1NTlDODUuMDA4NSAyMS40NDM0IDg0LjU5ODMgMjAuOTg3NiA4NC4zMTg0IDIwLjM4ODdDODQuMDQ0OSAxOS43ODk3IDgzLjkwODIgMTkuMDY3MSA4My45MDgyIDE4LjIyMDdWMTEuMzE2NEg4Ni43NTk4VjE3LjU4NTlDODYuNzU5OCAxOC4zMjgxIDg2LjkxMjggMTguODk0NSA4Ny4yMTg4IDE5LjI4NTJDODcuNTI0NyAxOS42NjkzIDg4LjAxMyAxOS44NjEzIDg4LjY4MzYgMTkuODYxM0M4OS4wMjg2IDE5Ljg2MTMgODkuMzM0NiAxOS44MDYgODkuNjAxNiAxOS42OTUzQzg5Ljg2ODUgMTkuNTc4MSA5MC4wOTMxIDE5LjQxNTQgOTAuMjc1NCAxOS4yMDdDOTAuNDU3NyAxOC45OTg3IDkwLjU5NDQgMTguNzUxMyA5MC42ODU1IDE4LjQ2NDhDOTAuNzgzMiAxOC4xNzE5IDkwLjgzMiAxNy44NDY0IDkwLjgzMiAxNy40ODgzVjExLjMxNjRIOTMuNjgzNlYyMkg5MC44MzJWMjAuMzMwMUg5MC42ODU1QzkwLjUxNjMgMjAuNzIwNyA5MC4yODUyIDIxLjA1OTIgODkuOTkyMiAyMS4zNDU3Qzg5LjY5OTIgMjEuNjI1NyA4OS4zNDc3IDIxLjg0MzggODguOTM3NSAyMkM4OC41MjczIDIyLjE0OTcgODguMDY1MSAyMi4yMjQ2IDg3LjU1MDggMjIuMjI0NlpNMTAwLjU3OCAyMi4yMjQ2Qzk5LjYwODEgMjIuMjI0NiA5OC43ODEyIDIyLjA5MTEgOTguMDk3NyAyMS44MjQyQzk3LjQxNDEgMjEuNTUwOCA5Ni44NzcgMjEuMTczMiA5Ni40ODYzIDIwLjY5MTRDOTYuMTAyMiAyMC4yMDk2IDk1Ljg3NDMgMTkuNjU2MiA5NS44MDI3IDE5LjAzMTJWMTguOTgyNEg5OC41OTU3TDk4LjYxNTIgMTkuMDMxMkM5OC43MjU5IDE5LjM4MjggOTguOTQ0IDE5LjY2OTMgOTkuMjY5NSAxOS44OTA2Qzk5LjU5NTEgMjAuMTA1NSAxMDAuMDQxIDIwLjIxMjkgMTAwLjYwNyAyMC4yMTI5QzEwMC45NzIgMjAuMjEyOSAxMDEuMjg4IDIwLjE2NDEgMTAxLjU1NSAyMC4wNjY0QzEwMS44MjggMTkuOTY4OCAxMDIuMDQgMTkuODM1MyAxMDIuMTg5IDE5LjY2NkMxMDIuMzM5IDE5LjQ5MDIgMTAyLjQxNCAxOS4yODUyIDEwMi40MTQgMTkuMDUwOFYxOS4wMzEyQzEwMi40MTQgMTguNzQ0OCAxMDIuMyAxOC41MTA0IDEwMi4wNzIgMTguMzI4MUMxMDEuODQ0IDE4LjE0NTggMTAxLjQ2NCAxNy45OTI4IDEwMC45MyAxNy44NjkxTDk5LjEzMjggMTcuNDg4M0M5OC40NTU3IDE3LjM0NTEgOTcuODg5MyAxNy4xMzY3IDk3LjQzMzYgMTYuODYzM0M5Ni45Nzc5IDE2LjU4OTggOTYuNjM2MSAxNi4yNTEzIDk2LjQwODIgMTUuODQ3N0M5Ni4xODAzIDE1LjQ0NCA5Ni4wNjY0IDE0Ljk3NTMgOTYuMDY2NCAxNC40NDE0VjE0LjQzMTZDOTYuMDY2NCAxMy43NjExIDk2LjI1MiAxMy4xNzUxIDk2LjYyMyAxMi42NzM4Qzk2Ljk5NDEgMTIuMTcyNSA5Ny41MTUgMTEuNzg1MiA5OC4xODU1IDExLjUxMTdDOTguODU2MSAxMS4yMzE4IDk5LjYzNzQgMTEuMDkxOCAxMDAuNTI5IDExLjA5MThDMTAxLjQ2NyAxMS4wOTE4IDEwMi4yNjEgMTEuMjM1IDEwMi45MTIgMTEuNTIxNUMxMDMuNTcgMTEuODAxNCAxMDQuMDc0IDEyLjE4MjMgMTA0LjQyNiAxMi42NjQxQzEwNC43NzcgMTMuMTQ1OCAxMDQuOTczIDEzLjY3OTcgMTA1LjAxMiAxNC4yNjU2VjE0LjMxNDVIMTAyLjM2NUwxMDIuMzU1IDE0LjI2NTZDMTAyLjI5IDEzLjk1MzEgMTAyLjEwMiAxMy42ODI5IDEwMS43ODkgMTMuNDU1MUMxMDEuNDc3IDEzLjIyMDcgMTAxLjA1MyAxMy4xMDM1IDEwMC41MiAxMy4xMDM1QzEwMC4xOTQgMTMuMTAzNSA5OS45MDQzIDEzLjE1MjMgOTkuNjUwNCAxMy4yNUM5OS40MDMgMTMuMzQxMSA5OS4yMDc3IDEzLjQ3NDYgOTkuMDY0NSAxMy42NTA0Qzk4LjkyMTIgMTMuODE5NyA5OC44NDk2IDE0LjAyNDcgOTguODQ5NiAxNC4yNjU2VjE0LjI3NTRDOTguODQ5NiAxNC40NjQyIDk4Ljg5ODQgMTQuNjMwMiA5OC45OTYxIDE0Ljc3MzRDOTkuMDkzOCAxNC45MTAyIDk5LjI1IDE1LjAzMDYgOTkuNDY0OCAxNS4xMzQ4Qzk5LjY4NjIgMTUuMjM4OSA5OS45NzkyIDE1LjMzMzMgMTAwLjM0NCAxNS40MThMMTAyLjEzMSAxNS43OTg4QzEwMy4yMTIgMTYuMDMzMiAxMDQuMDAzIDE2LjM4NDggMTA0LjUwNCAxNi44NTM1QzEwNS4wMTIgMTcuMzE1OCAxMDUuMjY2IDE3Ljk0MDggMTA1LjI2NiAxOC43Mjg1VjE4LjczODNDMTA1LjI2NiAxOS40NDE0IDEwNS4wNjQgMjAuMDU2NiAxMDQuNjYgMjAuNTg0QzEwNC4yNjMgMjEuMTA0OCAxMDMuNzEzIDIxLjUwODUgMTAzLjAxIDIxLjc5NDlDMTAyLjMwNyAyMi4wODE0IDEwMS40OTYgMjIuMjI0NiAxMDAuNTc4IDIyLjIyNDZaIiBmaWxsPSJ1cmwoI3BhaW50MV9saW5lYXJfMTYxM183NzApIi8+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXJfMTYxM183NzAiIHgxPSIxNi4wMDAyIiB5MT0iMC4wMDAxMjIwNyIgeDI9IjE2LjAwMDIiIHkyPSIzMi4wMDA0IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNGRkYxQzIiLz4KPHN0b3Agb2Zmc2V0PSIwLjM0MTM0NiIgc3RvcC1jb2xvcj0iI0VGRDc4NSIvPgo8c3RvcCBvZmZzZXQ9IjAuOTAzODQ2IiBzdG9wLWNvbG9yPSIjRjJCNDJDIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQxX2xpbmVhcl8xNjEzXzc3MCIgeDE9IjcyLjUiIHkxPSIxMSIgeDI9IjcyLjUiIHkyPSIyNyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSJ3aGl0ZSIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNGMUI2MzEiLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8L3N2Zz4K";
;// ./src/assets/images/xiala.svg
const xiala_namespaceObject = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEwLjUgMTFMMTUuMjYzMSA2LjVINS43MzY4NkwxMC41IDExWiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg==";
;// ./src/assets/images/lanu_en.svg
const lanu_en_namespaceObject = __webpack_require__.p + "cc8a2d2aef5d12b34a30.svg";
;// ./src/assets/images/lanu_zh.svg
const lanu_zh_namespaceObject = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPG1hc2sgaWQ9Im1hc2swXzE2MjdfODIiIHN0eWxlPSJtYXNrLXR5cGU6YWxwaGEiIG1hc2tVbml0cz0idXNlclNwYWNlT25Vc2UiIHg9IjAiIHk9IjAiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+CjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjEyIiBmaWxsPSIjRDlEOUQ5Ii8+CjwvbWFzaz4KPGcgbWFzaz0idXJsKCNtYXNrMF8xNjI3XzgyKSI+CjxyZWN0IHk9IjMiIHdpZHRoPSIzNiIgaGVpZ2h0PSIyNS43MTQzIiByeD0iMS43MTQyOSIgZmlsbD0id2hpdGUiLz4KPHJlY3QgeD0iLTEiIHk9Ii0yIiB3aWR0aD0iMzYiIGhlaWdodD0iMzEiIGZpbGw9IiNGMTM2MUQiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik04LjU3MTMyIDEzLjU3NzJMNS41NDg0MyAxNS43MzIxTDYuNjYzNzggMTIuMTkxMkwzLjY4MDE4IDkuOTgyMjJMNy4zOTIzOSA5Ljk0ODc5TDguNTcxMzIgNi40Mjg1OUw5Ljc1MDI1IDkuOTQ4NzlMMTMuNDYyNSA5Ljk4MjIyTDEwLjQ3ODkgMTIuMTkxMkwxMS41OTQyIDE1LjczMjFMOC41NzEzMiAxMy41NzcyWiIgZmlsbD0iI0ZGREM0MiIvPgo8cGF0aCBkPSJNMTcuMzUwNCAxMi4yMDRMMTcuNjUzNiAxMy40ODc0TDE4Ljk2NzggMTMuNTk1NkwxNy44NDEgMTQuMjgwNUwxOC4xNDQyIDE1LjU2MzlMMTcuMTQ0NSAxNC43MDM4TDE2LjAxNzcgMTUuMzg4N0wxNi41MjY3IDE0LjE3MjNMMTUuNTI3MSAxMy4zMTIyTDE2Ljg0MTMgMTMuNDIwNUwxNy4zNTA0IDEyLjIwNFoiIGZpbGw9IiNGRkRDNDIiLz4KPHBhdGggZD0iTTE2LjUwMiA4LjE4Njc4TDE3LjM2MTMgOS4xODcwMUwxOC41NzgxIDguNjc4ODNMMTcuODkyNCA5LjgwNTE4TDE4Ljc1MTcgMTAuODA1NEwxNy40Njg2IDEwLjUwMTNMMTYuNzgyOCAxMS42Mjc3TDE2LjY3NTYgMTAuMzEzNEwxNS4zOTI0IDEwLjAwOTNMMTYuNjA5MyA5LjUwMTA4TDE2LjUwMiA4LjE4Njc4WiIgZmlsbD0iI0ZGREM0MiIvPgo8cGF0aCBkPSJNMTMuMTkyIDUuMjMyODhMMTQuMzk1OCA1Ljc3MTA3TDE1LjI3OTcgNC43OTI0NUwxNS4xMzk5IDYuMTAzNjlMMTYuMzQzNyA2LjY0MTg4TDE1LjA1MzQgNi45MTQwOEwxNC45MTM2IDguMjI1MzJMMTQuMjU2IDcuMDgyMzFMMTIuOTY1NyA3LjM1NDUxTDEzLjg0OTYgNi4zNzU4OUwxMy4xOTIgNS4yMzI4OFoiIGZpbGw9IiNGRkRDNDIiLz4KPHBhdGggZD0iTTE1LjMyMDcgMTYuMzk1MkwxNS4wNTU2IDE3LjY4NkwxNi4yMDEyIDE4LjMzN0wxNC44OTE3IDE4LjQ4MzdMMTQuNjI2NSAxOS43NzQ1TDE0LjA4MjMgMTguNTc0NEwxMi43NzI4IDE4LjcyMUwxMy43NDYgMTcuODMyN0wxMy4yMDE5IDE2LjYzMjZMMTQuMzQ3NSAxNy4yODM2TDE1LjMyMDcgMTYuMzk1MloiIGZpbGw9IiNGRkRDNDIiLz4KPC9nPgo8L3N2Zz4K";
;// ./src/assets/images/connect_bg.svg
const connect_bg_namespaceObject = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjI3IiB2aWV3Qm94PSIwIDAgMTIwIDI3IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8bWFzayBpZD0ibWFzazBfMTc1NF85OSIgc3R5bGU9Im1hc2stdHlwZTphbHBoYSIgbWFza1VuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeD0iMCIgeT0iMCIgd2lkdGg9IjEyMCIgaGVpZ2h0PSIyNyI+CjxyZWN0IHdpZHRoPSIxMjAiIGhlaWdodD0iMjciIGZpbGw9IiNEOUQ5RDkiLz4KPC9tYXNrPgo8ZyBtYXNrPSJ1cmwoI21hc2swXzE3NTRfOTkpIj4KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjBfaWlfMTc1NF85OSkiPgo8cGF0aCBkPSJNMTA2LjUgMC41SDEzLjVDNi4zMjAzIDAuNSAwLjUgNi4zMjAzIDAuNSAxMy41QzAuNSAyMC42Nzk3IDYuMzIwMyAyNi41IDEzLjUgMjYuNUgxMDYuNUMxMTMuNjggMjYuNSAxMTkuNSAyMC42Nzk3IDExOS41IDEzLjVDMTE5LjUgNi4zMjAzIDExMy42OCAwLjUgMTA2LjUgMC41WiIgZmlsbD0iIzQ2MzgxRCIvPgo8L2c+CjxwYXRoIGQ9Ik0xMDYuNSAwLjI1SDEzLjVDNi4xODIyMyAwLjI1IDAuMjUgNi4xODIyMyAwLjI1IDEzLjVDMC4yNSAyMC44MTc4IDYuMTgyMjMgMjYuNzUgMTMuNSAyNi43NUgxMDYuNUMxMTMuODE4IDI2Ljc1IDExOS43NSAyMC44MTc4IDExOS43NSAxMy41QzExOS43NSA2LjE4MjIzIDExMy44MTggMC4yNSAxMDYuNSAwLjI1WiIgc3Ryb2tlPSIjQzBCNTg4IiBzdHJva2Utd2lkdGg9IjAuNSIvPgo8bWFzayBpZD0ibWFzazFfMTc1NF85OSIgc3R5bGU9Im1hc2stdHlwZTphbHBoYSIgbWFza1VuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeD0iLTEiIHk9IjQiIHdpZHRoPSIxMjIiIGhlaWdodD0iMjQiPgo8cGF0aCBkPSJNMTA5LjE1NiA1SDEwLjg0NDRDNC44NTUyIDUgMCA5Ljg1NTIgMCAxNS44NDQ0VjE1Ljg0NDVDMCAyMS44MzM3IDQuODU1MiAyNi42ODg5IDEwLjg0NDQgMjYuNjg4OUgxMDkuMTU2QzExNS4xNDUgMjYuNjg4OSAxMjAgMjEuODMzNyAxMjAgMTUuODQ0NVYxNS44NDQ0QzEyMCA5Ljg1NTIgMTE1LjE0NSA1IDEwOS4xNTYgNVoiIGZpbGw9IiM0MjJEMDIiIHN0cm9rZT0iI0MwQjU4OCIvPgo8L21hc2s+CjxnIG1hc2s9InVybCgjbWFzazFfMTc1NF85OSkiPgo8ZyBmaWx0ZXI9InVybCgjZmlsdGVyMV9mXzE3NTRfOTkpIj4KPHBhdGggZD0iTTYxLjcxNDcgMzMuMjgyMkM4OC4zMjU1IDMzLjI4MjIgMTA5Ljg5OCAzMS4xNjUgMTA5Ljg5OCAyOC41NTM0QzEwOS44OTggMjUuOTQxNyA4OC4zMjU1IDIzLjgyNDUgNjEuNzE0NyAyMy44MjQ1QzM1LjEwNCAyMy44MjQ1IDEzLjUzMTcgMjUuOTQxNyAxMy41MzE3IDI4LjU1MzRDMTMuNTMxNyAzMS4xNjUgMzUuMTA0IDMzLjI4MjIgNjEuNzE0NyAzMy4yODIyWiIgZmlsbD0iIzhGN0Y0OSIvPgo8L2c+CjwvZz4KPC9nPgo8ZGVmcz4KPGZpbHRlciBpZD0iZmlsdGVyMF9paV8xNzU0Xzk5IiB4PSIwLjUiIHk9IjAuNSIgd2lkdGg9IjExOSIgaGVpZ2h0PSIyNyIgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiPgo8ZmVGbG9vZCBmbG9vZC1vcGFjaXR5PSIwIiByZXN1bHQ9IkJhY2tncm91bmRJbWFnZUZpeCIvPgo8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluPSJTb3VyY2VHcmFwaGljIiBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIgcmVzdWx0PSJzaGFwZSIvPgo8ZmVDb2xvck1hdHJpeCBpbj0iU291cmNlQWxwaGEiIHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAxMjcgMCIgcmVzdWx0PSJoYXJkQWxwaGEiLz4KPGZlT2Zmc2V0Lz4KPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMS41Ii8+CjxmZUNvbXBvc2l0ZSBpbjI9ImhhcmRBbHBoYSIgb3BlcmF0b3I9ImFyaXRobWV0aWMiIGsyPSItMSIgazM9IjEiLz4KPGZlQ29sb3JNYXRyaXggdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMSAwIDAgMCAwIDAuOTEzMzM4IDAgMCAwIDAgMC43MDQ4MDggMCAwIDAgMC4yNSAwIi8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW4yPSJzaGFwZSIgcmVzdWx0PSJlZmZlY3QxX2lubmVyU2hhZG93XzE3NTRfOTkiLz4KPGZlQ29sb3JNYXRyaXggaW49IlNvdXJjZUFscGhhIiB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMTI3IDAiIHJlc3VsdD0iaGFyZEFscGhhIi8+CjxmZU9mZnNldCBkeT0iMSIvPgo8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSI0LjUiLz4KPGZlQ29tcG9zaXRlIGluMj0iaGFyZEFscGhhIiBvcGVyYXRvcj0iYXJpdGhtZXRpYyIgazI9Ii0xIiBrMz0iMSIvPgo8ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAxIDAgMCAwIDAgMC42ODMzMzMgMCAwIDAgMCAwIDAgMCAwIDAuMTkgMCIvPgo8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluMj0iZWZmZWN0MV9pbm5lclNoYWRvd18xNzU0Xzk5IiByZXN1bHQ9ImVmZmVjdDJfaW5uZXJTaGFkb3dfMTc1NF85OSIvPgo8L2ZpbHRlcj4KPGZpbHRlciBpZD0iZmlsdGVyMV9mXzE3NTRfOTkiIHg9IjQuODMxNzQiIHk9IjE1LjEyNDUiIHdpZHRoPSIxMTMuNzY2IiBoZWlnaHQ9IjI2Ljg1NzgiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj4KPGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT0iMCIgcmVzdWx0PSJCYWNrZ3JvdW5kSW1hZ2VGaXgiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0ic2hhcGUiLz4KPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iNC4zNSIgcmVzdWx0PSJlZmZlY3QxX2ZvcmVncm91bmRCbHVyXzE3NTRfOTkiLz4KPC9maWx0ZXI+CjwvZGVmcz4KPC9zdmc+Cg==";
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
		span {
			cursor: pointer;
			&:hover {
				opacity: .8;
			}
		}
		em {
		    margin-left: 15px;
			cursor: pointer;
		}
	}
	.header_right {
		display: flex;
    	margin-right: 15px;
	}
	.header_login {
		display: flex;
		align-items: center;
		justify-content: center;
		background: url(${connect_bg_namespaceObject}) no-repeat;
		background-size: 100%;
		width: 120px;
		height: 27px;
		font-size: 13px;
		font-weight: bold;
    	color: #F2EBB4;
    	margin: 0 10px;
		cursor: pointer;
	}
	.header_lognn {
		display: flex;
    	align-items: center;
		cursor: pointer;
	}
	.header_lanucss {
	    display: flex;
    	align-items: center;
	}
	.header_level {
		span {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 27px;
			height: 27px;
			background: #FFE9B440;
			border-radius: 50%;
		}
	}


	@media (max-width: 750px) {
		
	}
`;
function Header() {
  const {
    i18n,
    t
  } = (0,dist_es/* useTranslation */.Bd)();
  (0,react.useEffect)(() => {
    const language = localStorage.getItem('language');
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [i18n]);
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
      connectWallet();
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
    if (address) {
      handleMyKpi(); // 我的业绩
    }
  }, [address]);
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
  }, /*#__PURE__*/react.createElement("i", null, address ? `${address.substring(0, 4)}...${address.substr(-2)}` : ''))) : /*#__PURE__*/react.createElement("div", {
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
// EXTERNAL MODULE: ./node_modules/antd/es/message/index.js + 12 modules
var message = __webpack_require__(3532);
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
// EXTERNAL MODULE: ./node_modules/antd/es/drawer/index.js + 9 modules
var drawer = __webpack_require__(6143);
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
;// ./src/assets/images/colse.svg
const colse_namespaceObject = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjciIGhlaWdodD0iMjciIHZpZXdCb3g9IjAgMCAyNyAyNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE5Ljk5OTggOEw3Ljk5OTkgMTkuOTk5OSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxLjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8cGF0aCBkPSJNOC4wMDAyNCA4TDIwLjAwMDEgMTkuOTk5OSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxLjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L3N2Zz4K";
;// ./src/assets/images/huo.svg
const huo_namespaceObject = __webpack_require__.p + "689034fa24519ea9697f.svg";
;// ./src/components/index/addPollModal.jsx
/* eslint-disable react-hooks/exhaustive-deps */













function AddPollModal(_ref) {
  let {
    modalOpen,
    modalConfirm,
    modalCancel,
    invitation,
    isBindReferral,
    isInvitationReferral,
    dayAccountMax,
    dayAccountStake,
    maxAmount
  } = _ref;
  const {
    i18n,
    t
  } = (0,dist_es/* useTranslation */.Bd)();
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
  const [inputDay, setInputDay] = (0,react.useState)(15);
  const [inputDayText, setInputDayText] = (0,react.useState)("");
  const [inputDayIndex, setInputIndex] = (0,react.useState)(1);
  const [allApprove, setAllApprove] = (0,react.useState)("");
  const [usdtBalance, setUsdtBalance] = (0,react.useState)("0.0000");
  const [isApproveLoading, setIsApproveLoading] = (0,react.useState)(false);
  const [isLoading, setIsLoading] = (0,react.useState)(false);
  const [isOpen, setIsOpen] = (0,react.useState)(false);

  // 查询选择天数是否开启5天
  const handleOpen = async () => {
    try {
      var _chain$id;
      const contract = new web3.eth.Contract(abiStaking, addressStakingContract[(_chain$id = chain == null ? void 0 : chain.id) != null ? _chain$id : 56]);
      if (address && contract) {
        let isOpen = await contract.methods.isOpen().call();
        setIsOpen(isOpen);
      }
    } catch (error) {
      console.log('contract error===>', error);
    }
  };
  (0,react.useEffect)(() => {
    if (inputDay === 1) {
      setInputDayText(1 + t('Days') + t('CI') + " 0.5%");
    } else if (inputDay === 5) {
      setInputDayText(5 + t('Days') + t('CI') + " 2%");
    } else if (inputDay === 15) {
      setInputDayText(15 + t('Days') + t('CI') + " 0.8%");
    } else if (inputDay === 30) {
      setInputDayText(30 + t('Days') + t('CI') + " 1.3%");
    }
  }, [inputDay, i18n.language]);
  (0,react.useEffect)(() => {
    handleOpen(); // 查询选择天数是否开启5天
  }, []);
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
  const handleDayIndex = (day, index) => {
    if (isLoading) {
      return;
    }
    setInputDay(day);
    setInputIndex(index);
  };

  // 查询余额、授权
  const handleData = async () => {
    try {
      var _chain$id2;
      const contract = new web3.eth.Contract(abiErc20, addressUsdtToken[(_chain$id2 = chain == null ? void 0 : chain.id) != null ? _chain$id2 : 56]);
      if (address && contract) {
        var _chain$id3;
        // 查询是否授权
        let allowance = await contract.methods.allowance(address, addressStakingContract[(_chain$id3 = chain == null ? void 0 : chain.id) != null ? _chain$id3 : 56]).call();
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
    var _chain$id4;
    setIsApproveLoading(true);
    const contract = new web3.eth.Contract(abiErc20, addressUsdtToken[(_chain$id4 = chain == null ? void 0 : chain.id) != null ? _chain$id4 : 56]);

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
    if (Number(inputNumber) > Number(dayAccountMax) - Number(dayAccountStake)) {
      messageApi.open({
        type: 'warning',
        content: t('Cannot exceed the maximum pledged amount')
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
  return /*#__PURE__*/react.createElement(drawer/* default */.A, {
    placement: "bottom",
    open: modalOpen,
    onClose: () => onClickCancel(),
    height: 430,
    closable: false // 隐藏关闭按钮
  }, contextHolder, /*#__PURE__*/react.createElement("div", {
    className: "modal_title"
  }, /*#__PURE__*/react.createElement("span", null, t('Add Asset')), /*#__PURE__*/react.createElement("em", {
    onClick: () => onClickCancel()
  }, /*#__PURE__*/react.createElement("img", {
    src: colse_namespaceObject,
    alt: ""
  }))), /*#__PURE__*/react.createElement("div", {
    className: "modal_titont"
  }, /*#__PURE__*/react.createElement("span", null, t('Please enter the amount to add')), /*#__PURE__*/react.createElement("em", null, t('Balance'), " ", toFixedFloor(usdtBalance), " USDT")), /*#__PURE__*/react.createElement("div", {
    className: "modal_input"
  }, Number(Number(dayAccountMax) - Number(dayAccountStake)) > Number(maxAmount) ? /*#__PURE__*/react.createElement(input/* default */.A, {
    type: "number",
    placeholder: t('Maximum single pledge amount') + toFixedFloor(maxAmount, 0),
    allowClear: true,
    value: inputNumber,
    onChange: inputNumberChange
  }) : /*#__PURE__*/react.createElement(input/* default */.A, {
    type: "number",
    placeholder: t('Maximum single pledge amount') + toFixedFloor(Number(dayAccountMax) - Number(dayAccountStake), 0),
    allowClear: true,
    value: inputNumber,
    onChange: inputNumberChange
  })), /*#__PURE__*/react.createElement("div", {
    className: "modal_max"
  }, /*#__PURE__*/react.createElement("span", null, t('Maximum daily pledge amount')), /*#__PURE__*/react.createElement("em", null, toFixedFloor(Number(dayAccountMax) - Number(dayAccountStake)))), /*#__PURE__*/react.createElement("div", {
    className: "modal_titont"
  }, /*#__PURE__*/react.createElement("span", null, t('Please select the number of days'))), /*#__PURE__*/react.createElement("div", {
    className: "modal_input"
  }, /*#__PURE__*/react.createElement(input/* default */.A, {
    type: "text",
    placeholder: t('Please select the number of days'),
    disabled: true,
    value: inputDayText
  })), /*#__PURE__*/react.createElement("div", {
    className: isOpen ? 'modal_day_conter openTrue' : 'modal_day_conter openFalse'
  }, /*#__PURE__*/react.createElement("span", {
    className: inputDay === 1 ? 'on' : '',
    onClick: () => handleDayIndex(1, 0)
  }, "1", t('Days')), /*#__PURE__*/react.createElement("span", {
    className: inputDay === 15 ? 'on' : '',
    onClick: () => handleDayIndex(15, 1)
  }, "15", t('Days')), /*#__PURE__*/react.createElement("span", {
    className: inputDay === 30 ? 'on' : '',
    onClick: () => handleDayIndex(30, 2)
  }, "30", t('Days')), isOpen && /*#__PURE__*/react.createElement("span", {
    className: inputDay === 5 ? 'on' : '',
    onClick: () => handleDayIndex(5, 3)
  }, /*#__PURE__*/react.createElement("img", {
    src: huo_namespaceObject,
    alt: ""
  }), "5", t('Days'))), Number(allApprove) === 0 || Number(allApprove) < Number(inputNumber) ? /*#__PURE__*/react.createElement("div", {
    className: "modal_buttom",
    onClick: handleApprove
  }, !isApproveLoading && /*#__PURE__*/react.createElement("span", null, t('Approve')), isApproveLoading && /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(Loader_Dots, null, t('Approve')))) : /*#__PURE__*/react.createElement("div", {
    className: "modal_buttom",
    onClick: handleSubmit
  }, !isLoading && /*#__PURE__*/react.createElement("span", null, t('Confirm')), isLoading && /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(Loader_Dots, null, t('Confirm')))));
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
  } = (0,dist_es/* useTranslation */.Bd)();
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
    className: "conts_wid4",
    style: {
      fontFamily: "monospace",
      display: "inline-block",
      minWidth: `${Math.max(6, decimals + 3)}ch`
    }
  });
};
/* harmony default export */ const index_AnimatedProfit = (AnimatedProfit);
;// ./src/assets/images/tab_on.svg
const tab_on_namespaceObject = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzgiIGhlaWdodD0iMjMiIHZpZXdCb3g9IjAgMCA3OCAyMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPG1hc2sgaWQ9Im1hc2swXzE2MTlfODU0IiBzdHlsZT0ibWFzay10eXBlOmFscGhhIiBtYXNrVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4PSIwIiB5PSIwIiB3aWR0aD0iNzgiIGhlaWdodD0iMjMiPgo8cmVjdCB3aWR0aD0iNzgiIGhlaWdodD0iMjMiIGZpbGw9IiNEOUQ5RDkiLz4KPC9tYXNrPgo8ZyBtYXNrPSJ1cmwoI21hc2swXzE2MTlfODU0KSI+CjxyZWN0IHk9IjIyIiB3aWR0aD0iNzkiIGhlaWdodD0iMSIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyXzE2MTlfODU0KSIvPgo8ZyBmaWx0ZXI9InVybCgjZmlsdGVyMF9mXzE2MTlfODU0KSI+CjxwYXRoIGQ9Ik0yMS41IDdINTdMNzUgMjJINkwyMS41IDdaIiBmaWxsPSJ1cmwoI3BhaW50MV9saW5lYXJfMTYxOV84NTQpIi8+CjwvZz4KPC9nPgo8ZGVmcz4KPGZpbHRlciBpZD0iZmlsdGVyMF9mXzE2MTlfODU0IiB4PSItMS45IiB5PSItMC45IiB3aWR0aD0iODQuOCIgaGVpZ2h0PSIzMC44IiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+CjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0iQmFja2dyb3VuZEltYWdlRml4IiByZXN1bHQ9InNoYXBlIi8+CjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjMuOTUiIHJlc3VsdD0iZWZmZWN0MV9mb3JlZ3JvdW5kQmx1cl8xNjE5Xzg1NCIvPgo8L2ZpbHRlcj4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzE2MTlfODU0IiB4MT0iMCIgeTE9IjIyLjUiIHgyPSI3OSIgeTI9IjIyLjUiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzE4MTYwQSIvPgo8c3RvcCBvZmZzZXQ9IjAuNTE1MTA1IiBzdG9wLWNvbG9yPSIjREU5QTFGIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzE4MTQwOSIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MV9saW5lYXJfMTYxOV84NTQiIHgxPSI0MC41IiB5MT0iNyIgeDI9IjQwLjUiIHkyPSIyMiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjNzE1MzAwIiBzdG9wLW9wYWNpdHk9IjAiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjQUI3ODFBIiBzdG9wLW9wYWNpdHk9IjAuMzkiLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8L3N2Zz4K";
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
		height: 35px;
		padding: 0 10px;
		background: rgb(255, 255, 255, 0.13);
		margin-bottom: 10px;
		span {
			font-size: 14px;
			color: #9A9892;
			font-weight: 500;
		}
	}
	.tabs_list_conter {
	    display: flex;
    	align-items: center;
	    padding: 10px;
		border-bottom: 1px solid rgb(255, 255, 255, 0.1);
		span {
			display: inline-block;
			font-size: 12px;
    		opacity: .8;
		}
		i {
			color: #ccc;
    		font-weight: bold;
		}
		em {
		    display: flex;
			align-items: center;
			justify-content: center;
			background: #F3B02C;
			padding: 5px 10px;
			border-radius: 10px;
			height: 19px;
			font-weight: bold;
			color: #000000;
			cursor: pointer;
		}
	}
	.noData {
		font-size: 14px;
		font-weight: 500;
		color: #7E7B6F;
		margin-top: 50px;
		text-align: center;
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
  } = (0,dist_es/* useTranslation */.Bd)();
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
    className: "table_conter"
  }, /*#__PURE__*/react.createElement("span", {
    className: table === 1 ? 'on' : '',
    onClick: () => setTable(1)
  }, t('Investment List'), table === 1 && /*#__PURE__*/react.createElement("em", null, /*#__PURE__*/react.createElement("img", {
    src: tab_on_namespaceObject,
    alt: ""
  }))), /*#__PURE__*/react.createElement("span", {
    className: table === 2 ? 'on' : '',
    onClick: () => setTable(2)
  }, t('Redemption List'), table === 2 && /*#__PURE__*/react.createElement("em", null, /*#__PURE__*/react.createElement("img", {
    src: tab_on_namespaceObject,
    alt: ""
  })))), table === 1 && /*#__PURE__*/react.createElement("div", {
    style: {
      marginBottom: "50px"
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
    className: "conts_wid1"
  }, index + 1), /*#__PURE__*/react.createElement("span", {
    className: "conts_wid2"
  }, formatTimestamp(item.stakeTime * 1000, "MM-DD HH:mm"), /*#__PURE__*/react.createElement("br", null), item.endTime && /*#__PURE__*/react.createElement(CountdownTimestamp, {
    key: `${item.stakeTime}-${item.endTime}`,
    targetTimestamp: item.endTime
  })), /*#__PURE__*/react.createElement("span", {
    className: "conts_wid3"
  }, toFixedFloor((Number(item.amount) / 1e18).toString(), 2)), /*#__PURE__*/react.createElement(index_AnimatedProfit, {
    value: item.profit
  }), /*#__PURE__*/react.createElement("span", {
    className: "conts_wid5"
  },
  // 质押天数1天
  // 86400
  item.stakeIndex === "0" ? /*#__PURE__*/react.createElement("i", null, currentDate > item.stakeTime * 1 + 1 * 60 * 60 ? /*#__PURE__*/react.createElement("em", {
    onClick: () => handleRed(item.index)
  }, t('Red')) : /*#__PURE__*/react.createElement("i", null, t('Pending'))) :
  // 质押天数15天
  item.stakeIndex === "1" ? /*#__PURE__*/react.createElement("i", null, currentDate > item.stakeTime * 1 + 15 * 60 * 60 ? /*#__PURE__*/react.createElement("em", {
    onClick: () => handleRed(item.index)
  }, t('Red')) : /*#__PURE__*/react.createElement("i", null, t('Pending'))) :
  // 质押天数30天
  item.stakeIndex === "2" ? /*#__PURE__*/react.createElement("i", null, currentDate > item.stakeTime * 1 + 30 * 60 * 60 ? /*#__PURE__*/react.createElement("em", {
    onClick: () => handleRed(item.index)
  }, t('Red')) : /*#__PURE__*/react.createElement("i", null, t('Pending'))) :
  // 质押天数5天
  item.stakeIndex === "3" ? /*#__PURE__*/react.createElement("i", null, currentDate > item.stakeTime * 1 + 5 * 60 * 60 ? /*#__PURE__*/react.createElement("em", {
    onClick: () => handleRed(item.index)
  }, t('Red')) : /*#__PURE__*/react.createElement("i", null, t('Pending'))) : /*#__PURE__*/react.createElement("i", null, t('Pending')))))) : /*#__PURE__*/react.createElement("div", {
    className: "noData"
  }, t('No data available'))) : /*#__PURE__*/react.createElement("div", {
    className: "noData"
  }, /*#__PURE__*/react.createElement(spin/* default */.A, {
    indicator: /*#__PURE__*/react.createElement(LoadingOutlined/* default */.A, {
      style: {
        fontSize: 28,
        color: "#F3B02C"
      },
      spin: true
    })
  }))) : /*#__PURE__*/react.createElement("div", {
    className: "noData"
  }, t('No data available'))), table === 2 && /*#__PURE__*/react.createElement("div", {
    style: {
      marginBottom: "50px"
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
  }, t('Progress'))), address ? /*#__PURE__*/react.createElement("div", null, !loading ? /*#__PURE__*/react.createElement("div", null, redeemed.length > 0 ? redeemed.map((item, index) => /*#__PURE__*/react.createElement("div", {
    key: index
  }, item.status && /*#__PURE__*/react.createElement("div", {
    className: "tabs_list_conter"
  }, /*#__PURE__*/react.createElement("span", {
    className: "conts_wid1"
  }, index + 1), /*#__PURE__*/react.createElement("span", {
    className: "conts_wid2"
  }, formatTimestamp(item.stakeTime * 1000, "MM-DD HH:mm")), /*#__PURE__*/react.createElement("span", {
    className: "conts_wid3"
  }, toFixedFloor((Number(item.amount) / 1e18).toString(), 2)), /*#__PURE__*/react.createElement("span", {
    className: "conts_wid4"
  }, toFixedFloor(item.profit, 4)), /*#__PURE__*/react.createElement("span", {
    className: "conts_wid5"
  }, /*#__PURE__*/react.createElement("i", null, t('Redeemed')))))) : /*#__PURE__*/react.createElement("div", {
    className: "noData"
  }, t('No data available'))) : /*#__PURE__*/react.createElement("div", {
    className: "noData"
  }, /*#__PURE__*/react.createElement(spin/* default */.A, {
    indicator: /*#__PURE__*/react.createElement(LoadingOutlined/* default */.A, {
      style: {
        fontSize: 28,
        color: "#F3B02C"
      },
      spin: true
    })
  }))) : /*#__PURE__*/react.createElement("div", {
    className: "noData"
  }, t('No data available'))));
}
/* harmony default export */ const list = (List);
;// ./src/assets/images/assets_bg.svg
const assets_bg_namespaceObject = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzU1IiBoZWlnaHQ9IjE0MCIgdmlld0JveD0iMCAwIDM1NSAxNDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIGZpbHRlcj0idXJsKCNmaWx0ZXIwX2lpXzE4MjJfNTA2KSI+CjxwYXRoIGQ9Ik0yMzkuNzgxIDIzSDExMi4xMDVDMTA3Ljk1MyAyMi41IDEwNi43NDIgMjAuMzMzMyAxMDUuODc3IDE5LjVDMTAyLjI0NCAxNC41IDk1LjYwMDkgNS40IDkzLjk0MDEgM0M5Mi4yNzkyIDAuNiA4Ny43MTIgMCA4NS42MzYgMEgxNC41MzIyQzIuOTA2NDMgMS42IDAgMTAgMCAxNFYxMjcuNUMxLjY2MDgyIDEzNS41IDkuMzQyMSAxMzkuMTY3IDEyLjk3NTEgMTQwSDM0Mi4wMjVDMzUwLjc0NCAxMzggMzU0LjMwOCAxMzAuNSAzNTUgMTI3VjEzQzM1Mi45MjQgMyAzNDUuNjU4IDAuMzMzMzMzIDM0MC45ODcgMEgyNjUuMjEyQzI2Mi43MjEgMCAyNTkuNjc2IDMgMjU4LjQ2NSA0LjVMMjQ3LjA0NyAyMEMyNDQuOTcxIDIyLjUgMjQxLjg1NyAyMyAyMzkuNzgxIDIzWiIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyXzE4MjJfNTA2KSIvPgo8L2c+CjxnIGZpbHRlcj0idXJsKCNmaWx0ZXIxX2lfMTgyMl81MDYpIj4KPHBhdGggZD0iTTI1NyAwSDk4TDExMi41MDIgMThIMjQ0LjA1MkwyNTcgMFoiIGZpbGw9InVybCgjcGFpbnQxX2xpbmVhcl8xODIyXzUwNikiLz4KPC9nPgo8cmVjdCB4PSIzMjEiIHk9IjkiIHdpZHRoPSIxMiIgaGVpZ2h0PSI1IiBmaWxsPSJ1cmwoI3BhaW50Ml9saW5lYXJfMTgyMl81MDYpIi8+CjxyZWN0IHg9IjMwNCIgeT0iOSIgd2lkdGg9IjEyIiBoZWlnaHQ9IjUiIGZpbGw9InVybCgjcGFpbnQzX2xpbmVhcl8xODIyXzUwNikiIGZpbGwtb3BhY2l0eT0iMC40MiIvPgo8cmVjdCB4PSIyODciIHk9IjkiIHdpZHRoPSIxMiIgaGVpZ2h0PSI1IiBmaWxsPSJ1cmwoI3BhaW50NF9saW5lYXJfMTgyMl81MDYpIiBmaWxsLW9wYWNpdHk9IjAuMTYiLz4KPHJlY3Qgd2lkdGg9IjEyIiBoZWlnaHQ9IjUiIHRyYW5zZm9ybT0ibWF0cml4KC0xIDAgMCAxIDM0IDkpIiBmaWxsPSJ1cmwoI3BhaW50NV9saW5lYXJfMTgyMl81MDYpIi8+CjxyZWN0IHdpZHRoPSIxMiIgaGVpZ2h0PSI1IiB0cmFuc2Zvcm09Im1hdHJpeCgtMSAwIDAgMSA1MSA5KSIgZmlsbD0idXJsKCNwYWludDZfbGluZWFyXzE4MjJfNTA2KSIgZmlsbC1vcGFjaXR5PSIwLjQyIi8+CjxyZWN0IHdpZHRoPSIxMiIgaGVpZ2h0PSI1IiB0cmFuc2Zvcm09Im1hdHJpeCgtMSAwIDAgMSA2OCA5KSIgZmlsbD0idXJsKCNwYWludDdfbGluZWFyXzE4MjJfNTA2KSIgZmlsbC1vcGFjaXR5PSIwLjE2Ii8+CjxkZWZzPgo8ZmlsdGVyIGlkPSJmaWx0ZXIwX2lpXzE4MjJfNTA2IiB4PSIwIiB5PSIwIiB3aWR0aD0iMzU1IiBoZWlnaHQ9IjE0MSIgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiPgo8ZmVGbG9vZCBmbG9vZC1vcGFjaXR5PSIwIiByZXN1bHQ9IkJhY2tncm91bmRJbWFnZUZpeCIvPgo8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluPSJTb3VyY2VHcmFwaGljIiBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIgcmVzdWx0PSJzaGFwZSIvPgo8ZmVDb2xvck1hdHJpeCBpbj0iU291cmNlQWxwaGEiIHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAxMjcgMCIgcmVzdWx0PSJoYXJkQWxwaGEiLz4KPGZlT2Zmc2V0Lz4KPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iNSIvPgo8ZmVDb21wb3NpdGUgaW4yPSJoYXJkQWxwaGEiIG9wZXJhdG9yPSJhcml0aG1ldGljIiBrMj0iLTEiIGszPSIxIi8+CjxmZUNvbG9yTWF0cml4IHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAuNjc2MjgyIDAgMCAwIDAgMC41OTg0OTMgMCAwIDAgMCAwLjMzMDU1NCAwIDAgMCAxIDAiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbjI9InNoYXBlIiByZXN1bHQ9ImVmZmVjdDFfaW5uZXJTaGFkb3dfMTgyMl81MDYiLz4KPGZlQ29sb3JNYXRyaXggaW49IlNvdXJjZUFscGhhIiB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMTI3IDAiIHJlc3VsdD0iaGFyZEFscGhhIi8+CjxmZU9mZnNldCBkeT0iMSIvPgo8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIwLjg1Ii8+CjxmZUNvbXBvc2l0ZSBpbjI9ImhhcmRBbHBoYSIgb3BlcmF0b3I9ImFyaXRobWV0aWMiIGsyPSItMSIgazM9IjEiLz4KPGZlQ29sb3JNYXRyaXggdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMC43OTYwNzggMCAwIDAgMCAwLjY5ODAzOSAwIDAgMCAwIDAuNDM5MjE2IDAgMCAwIDEgMCIvPgo8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluMj0iZWZmZWN0MV9pbm5lclNoYWRvd18xODIyXzUwNiIgcmVzdWx0PSJlZmZlY3QyX2lubmVyU2hhZG93XzE4MjJfNTA2Ii8+CjwvZmlsdGVyPgo8ZmlsdGVyIGlkPSJmaWx0ZXIxX2lfMTgyMl81MDYiIHg9Ijk4IiB5PSIwIiB3aWR0aD0iMTU5IiBoZWlnaHQ9IjIwIiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+CjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0iQmFja2dyb3VuZEltYWdlRml4IiByZXN1bHQ9InNoYXBlIi8+CjxmZUNvbG9yTWF0cml4IGluPSJTb3VyY2VBbHBoYSIgdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIiByZXN1bHQ9ImhhcmRBbHBoYSIvPgo8ZmVPZmZzZXQgZHk9IjIiLz4KPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMS4xIi8+CjxmZUNvbXBvc2l0ZSBpbjI9ImhhcmRBbHBoYSIgb3BlcmF0b3I9ImFyaXRobWV0aWMiIGsyPSItMSIgazM9IjEiLz4KPGZlQ29sb3JNYXRyaXggdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMC41MTM3MjYgMCAwIDAgMCAwLjQ2NjY2NyAwIDAgMCAwIDAuMzY0NzA2IDAgMCAwIDEgMCIvPgo8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluMj0ic2hhcGUiIHJlc3VsdD0iZWZmZWN0MV9pbm5lclNoYWRvd18xODIyXzUwNiIvPgo8L2ZpbHRlcj4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzE4MjJfNTA2IiB4MT0iMTc3LjUiIHkxPSIwIiB4Mj0iMTc3LjUiIHkyPSIxNDAiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzJGMjgxNSIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMyRjI4MTYiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDFfbGluZWFyXzE4MjJfNTA2IiB4MT0iMTc3LjUiIHkxPSIwIiB4Mj0iMTc3LjUiIHkyPSIxOCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjNzY1RjI1Ii8+CjxzdG9wIG9mZnNldD0iMSIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50Ml9saW5lYXJfMTgyMl81MDYiIHgxPSIzMzMiIHkxPSIxMS41IiB4Mj0iMzIxIiB5Mj0iMTEuNSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjRTlENDgzIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0VCQkQ2NSIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50M19saW5lYXJfMTgyMl81MDYiIHgxPSIzMTYiIHkxPSIxMS41IiB4Mj0iMzA0IiB5Mj0iMTEuNSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjRTlENDgzIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0VCQkQ2NSIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50NF9saW5lYXJfMTgyMl81MDYiIHgxPSIyOTkiIHkxPSIxMS41IiB4Mj0iMjg3IiB5Mj0iMTEuNSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjRTlENDgzIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0VCQkQ2NSIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50NV9saW5lYXJfMTgyMl81MDYiIHgxPSIxMiIgeTE9IjIuNSIgeDI9IjAiIHkyPSIyLjUiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0U5RDQ4MyIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNFQkJENjUiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDZfbGluZWFyXzE4MjJfNTA2IiB4MT0iMTIiIHkxPSIyLjUiIHgyPSIwIiB5Mj0iMi41IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNFOUQ0ODMiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRUJCRDY1Ii8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQ3X2xpbmVhcl8xODIyXzUwNiIgeDE9IjEyIiB5MT0iMi41IiB4Mj0iMCIgeTI9IjIuNSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjRTlENDgzIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0VCQkQ2NSIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo=";
;// ./src/assets/images/assets_add.svg
const assets_add_namespaceObject = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iOCIgY3k9IjgiIHI9IjgiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik01IDhIMTEiIHN0cm9rZT0iI0YzQjAyQyIgc3Ryb2tlLXdpZHRoPSIxLjYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8cGF0aCBkPSJNOCA1VjExIiBzdHJva2U9IiNGM0IwMkMiIHN0cm9rZS13aWR0aD0iMS42IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPC9zdmc+Cg==";
;// ./src/assets/images/assets_copy.svg
const assets_copy_namespaceObject = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTEiIGhlaWdodD0iMTMiIHZpZXdCb3g9IjAgMCAxMSAxMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuNjQwNTkgMi40NzYxOUM3Ljg4Mzc2IDIuNDc2MTkgOC4xMTY5NyAyLjU3NDAyIDguMjg4OTEgMi43NDgxNkM4LjQ2MDg2IDIuOTIyMyA4LjU1NzQ2IDMuMTU4NDkgOC41NTc0NiAzLjQwNDc2VjEyLjA3MTRDOC41NTc0NiAxMi4zMTc3IDguNDYwODYgMTIuNTUzOSA4LjI4ODkxIDEyLjcyOEM4LjExNjk3IDEyLjkwMjIgNy44ODM3NiAxMyA3LjY0MDU5IDEzSDAuOTE2ODdDMC43OTY0NjUgMTMgMC42NzcyMzkgMTIuOTc2IDAuNTY1OTk5IDEyLjkyOTNDMC40NTQ3NTkgMTIuODgyNyAwLjM1MzY4NCAxMi44MTQzIDAuMjY4NTQ1IDEyLjcyOEMwLjE4MzQwNiAxMi42NDE4IDAuMTE1ODcgMTIuNTM5NCAwLjA2OTc5MjUgMTIuNDI2OEMwLjAyMzcxNTUgMTIuMzE0MSAwIDEyLjE5MzQgMCAxMi4wNzE0VjMuNDA0NzZDMCAzLjE1ODQ5IDAuMDk2NTk4NSAyLjkyMjMgMC4yNjg1NDUgMi43NDgxNkMwLjQ0MDQ5MiAyLjU3NDAyIDAuNjczNzAxIDIuNDc2MTkgMC45MTY4NyAyLjQ3NjE5SDcuNjQwNTlaTTcuMzM0OTYgMy43MTQyOUgxLjIyMjQ5VjExLjc2MTlINy4zMzQ5NlYzLjcxNDI5Wk0xMC4wODMxIDEuNzc4OTRlLTA3QzEwLjMxMTIgLTAuMDAwMTQyNjkyIDEwLjUzMTEgMC4wODU3NzUxIDEwLjY5OTkgMC4yNDA5ODVDMTAuODY4OCAwLjM5NjE5NCAxMC45NzQ0IDAuNjA5NTU2IDEwLjk5NjMgMC44Mzk0MjlMMTEgMC45Mjg1NzJWOS4yODEzOEMxMC45OTk4IDkuNDM5MTYgMTAuOTQwMiA5LjU5MDkyIDEwLjgzMzIgOS43MDU2NkMxMC43MjYzIDkuODIwMzkgMTAuNTgwMSA5Ljg4OTQzIDEwLjQyNDYgOS44OTg2OEMxMC4yNjkgOS45MDc5MiAxMC4xMTU5IDkuODU2NjggOS45OTY0NCA5Ljc1NTQxQzkuODc2OTcgOS42NTQxNCA5LjgwMDE5IDkuNTEwNDkgOS43ODE3OCA5LjM1MzgxTDkuNzc3NTEgOS4yODEzOFYxLjIzODFIMy42Njc0OEMzLjUxNzc3IDEuMjM4MDggMy4zNzMyNyAxLjE4MjQxIDMuMjYxMzkgMS4wODE2NUMzLjE0OTUxIDAuOTgwODk3IDMuMDc4MDMgMC44NDIwNiAzLjA2MDUxIDAuNjkxNDc2TDMuMDU2MjMgMC42MTkwNDhDMy4wNTYyNSAwLjQ2NzQyMiAzLjExMTIyIDAuMzIxMDc3IDMuMjEwNzEgMC4yMDc3N0MzLjMxMDE5IDAuMDk0NDYyNiAzLjQ0NzI4IDAuMDIyMDczNyAzLjU5NTk3IDAuMDA0MzMzNTNMMy42Njc0OCAxLjc3ODk0ZS0wN0gxMC4wODMxWiIgZmlsbD0iIzdFN0I2RiIvPgo8L3N2Zz4K";
;// ./src/assets/images/banner1_en.png
const banner1_en_namespaceObject = __webpack_require__.p + "c5ad985e7b47f1e523f2.png";
;// ./src/assets/images/banner1_zh.png
const banner1_zh_namespaceObject = __webpack_require__.p + "e8c665db5073c604a4ce.png";
;// ./src/components/index/comm1.jsx
/* eslint-disable react-hooks/exhaustive-deps */





















// 100px 转换成 vw：屏幕宽度为1920的话，100 / 1920 * 100
// font-size: 20px; 用vw表示
// 20px = (20/1920) * 100vw = 1.04vw
// font-size: clamp(16px, 1.04vw, 20px);  最小 16px，最大 20px，
const comm1_CustomStyle = styled_components_browser_esm/* default */.Ay.div`
    margin: 0 15px;
	.comm1_container {
	    background: #181409;
		border: 1px solid #545142;
		border-radius: 30px;
	}
	.comm1_assConter {
	    position: relative;
		padding-bottom: 15px;
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
		height: 12%;
		span {
			font-size: 13px;
    		color: #FDECB4;
			font-weight: bold;
		}
	}
	.comm1_assets_title {
		display: flex;
		align-items: center;
    	justify-content: center;
	}
	.comm1_assets_add {
	    display: flex;
		align-items: center;
		background: #F3B02C;
		border-radius: 20px;
		font-size: 12px;
		color: #000000;
		padding: 5px;
		cursor: pointer;
		img {
			margin-right: 5px;
		}
		em {
			margin-right: 5px;
			font-weight: 500;
		}
	}
	.comm1_assets_balance {
		margin-top: 7%;
		margin-bottom: 5%;
		text-align: center;
		span {
			font-size: 24px;
		}
		em {
			font-size: 12px;
    		margin-left: 5px;
			opacity: .8;
		}
	}
	.comm1_performance {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 20px 15px;
		span {
		    font-size: 14px;
    		color: #9A9892;
			font-weight: bold;
		}
		em {
			font-size: 13px;
			opacity: .8;
		}
		i {
			font-size: 13px;
			opacity: .8;
			cursor: pointer;
		}
		img {
			margin-left: 5px;
		}
	}
	.comm1_banner {
		margin: 13px 0;
		img {
			width: 100%;
		}
	}


	@media (max-width: 750px) {
		
	}
`;
function Comm1() {
  const {
    i18n,
    t
  } = (0,dist_es/* useTranslation */.Bd)();
  (0,react.useEffect)(() => {
    const language = localStorage.getItem('language');
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [i18n]);
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
  const [dayAccountStake, setDayAccountStake] = (0,react.useState)(""); // 当前钱包每天已经质押数量
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
        let perDayAccountMax = await contract.methods.perDayAccountMax().call();
        const perDayAccountMaxBig = new bignumber/* default */.A(perDayAccountMax.toString()).shiftedBy(-18).toString();
        setDayAccountMax(perDayAccountMaxBig);

        // 每天已经质押数量
        const timestamp = Math.floor(Date.now() / 1000);
        let startTime = await contract.methods.startTime().call();
        let time = Math.floor((Number(timestamp) - Number(startTime)) / 86400);
        let dayAccountStake = await contract.methods.dayAccountStakeMaxAmounts(address, time).call();
        const dayAccountStakeBig = new bignumber/* default */.A(dayAccountStake.toString()).shiftedBy(-18).toString();
        setDayAccountStake(dayAccountStakeBig);
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
          let profit;
          if (record.status) {
            // 已赎回
            const unstakeRewards = await contract.methods.unstakeRewards(address, i).call();
            profit = new bignumber/* default */.A(unstakeRewards.toString()).shiftedBy(-18).toString();
          } else {
            const rewardOfSlot = await contract.methods.rewardOfSlot(address, i).call();
            profit = new bignumber/* default */.A(rewardOfSlot.toString()).shiftedBy(-18).toString();
          }
          let endTime;
          // 86400
          if (record.stakeIndex === "0") {
            // 质押天数1天								
            endTime = Number(record.stakeTime * 1 + 1 * 60 * 60);
          } else if (record.stakeIndex === "1") {
            // 质押天数15天
            endTime = Number(record.stakeTime * 1 + 15 * 60 * 60);
          } else if (record.stakeIndex === "2") {
            // 质押天数30天
            endTime = Number(record.stakeTime * 1 + 30 * 60 * 60);
          } else if (record.stakeIndex === "3") {
            // 质押天数5天
            endTime = Number(record.stakeTime * 1 + 5 * 60 * 60);
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
    if (address) {
      const timer = setInterval(() => {
        handleMyAssets(); // 我的资产
      }, 3000);
      return () => clearInterval(timer);
    }
  }, [address]);
  (0,react.useEffect)(() => {
    if (address) {
      const timerlist = setInterval(() => {
        handleListData(); // 查询投资列表、赎回列表
      }, 3000);
      return () => clearInterval(timerlist);
    }
  }, [address]);
  (0,react.useEffect)(() => {
    if (address) {
      handleReferralContract(); // 查询Referral合约地址、最大质押数量、每天已经质押数量
      handleMyKpi(); // 我的业绩
    }
  }, [address]);
  (0,react.useEffect)(() => {
    if (address && referralContract) {
      handleIsBindReferral(); // 查询root地址、当前钱包地址是否质押、邀请人地址是否质押
    }
  }, [address, referralContract]);
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
  return /*#__PURE__*/react.createElement(comm1_CustomStyle, null, contextHolder, /*#__PURE__*/react.createElement("div", {
    className: "comm1_container"
  }, /*#__PURE__*/react.createElement("div", {
    className: "comm1_assConter"
  }, /*#__PURE__*/react.createElement("img", {
    src: assets_bg_namespaceObject,
    alt: "",
    className: "comm1_assBgImg"
  }), /*#__PURE__*/react.createElement("div", {
    className: "comm1_assPosabg"
  }, /*#__PURE__*/react.createElement("div", {
    className: "comm1_asspconts"
  }, /*#__PURE__*/react.createElement("span", null, t('My Assets'))), /*#__PURE__*/react.createElement("div", {
    className: "comm1_assets_balance"
  }, myAssets !== "0" ? /*#__PURE__*/react.createElement(build/* default */.Ay, {
    start: prevAssets,
    end: myAssets,
    duration: 2.0,
    separator: ",",
    decimals: 10,
    decimal: ".",
    prefix: "",
    preserveValue: true
  }, _ref => {
    let {
      countUpRef
    } = _ref;
    return /*#__PURE__*/react.createElement("span", {
      ref: countUpRef,
      style: {
        fontFamily: "monospace",
        // 等宽字体
        display: "inline-block",
        minWidth: "7ch",
        // 固定最小宽度，避免宽度跳动
        textAlign: "right"
      }
    });
  }) : /*#__PURE__*/react.createElement("span", null, toFixedFloor(myAssets, 10)), /*#__PURE__*/react.createElement("em", null, "USDT")), /*#__PURE__*/react.createElement("div", {
    className: "comm1_assets_title"
  }, /*#__PURE__*/react.createElement("div", {
    className: "comm1_assets_add",
    onClick: handleOpenModal
  }, /*#__PURE__*/react.createElement("img", {
    src: assets_add_namespaceObject,
    alt: ""
  }), /*#__PURE__*/react.createElement("em", null, t('Donation pool')))))), /*#__PURE__*/react.createElement("div", {
    className: "comm1_performance"
  }, /*#__PURE__*/react.createElement("span", null, t('Performance')), /*#__PURE__*/react.createElement("em", null, toFixedFloor(myPerformance, 8), " USDT")), /*#__PURE__*/react.createElement("div", {
    className: "comm1_performance"
  }, /*#__PURE__*/react.createElement("span", null, t('Link')), address ? /*#__PURE__*/react.createElement("i", null, isBindReferral || address === rootAddress ? /*#__PURE__*/react.createElement("i", {
    onClick: handleCopy
  }, address.substring(0, 4), "...", address.substr(-4), /*#__PURE__*/react.createElement("img", {
    src: assets_copy_namespaceObject,
    alt: ""
  })) : /*#__PURE__*/react.createElement("i", null, "-")) : /*#__PURE__*/react.createElement("em", null, "-"))), /*#__PURE__*/react.createElement("div", {
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
  }), /*#__PURE__*/react.createElement(addPollModal, {
    modalOpen: openModal,
    modalConfirm: modalConfirm,
    modalCancel: () => setOpenModal(false),
    invitation: invitation,
    isBindReferral: isBindReferral,
    isInvitationReferral: isInvitationReferral,
    dayAccountMax: dayAccountMax,
    dayAccountStake: dayAccountStake,
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
  }, /*#__PURE__*/react.createElement(index_esm/* HelmetProvider */.vd, null, /*#__PURE__*/react.createElement(dist/* BrowserRouter */.Kd, null, /*#__PURE__*/react.createElement(header, null), /*#__PURE__*/react.createElement(react_router_dist/* Routes */.BV, null, /*#__PURE__*/react.createElement(react_router_dist/* Route */.qh, {
    exact: true,
    path: "/",
    element: /*#__PURE__*/react.createElement(index, null)
  }), /*#__PURE__*/react.createElement(react_router_dist/* Route */.qh, {
    path: "/index",
    element: /*#__PURE__*/react.createElement(index, null)
  }), /*#__PURE__*/react.createElement(react_router_dist/* Route */.qh, {
    path: "*",
    element: /*#__PURE__*/react.createElement(index, null)
  }))))) : null);
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

/***/ 2038:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"Connect":"Connect","Home":"Home","Address":"Address","Select Language":"Select Language","My Assets":"My Assets","Donation pool":"Donation pool","Performance":"Performance","Link":"Link","Investment List":"Investment List","Redemption List":"Redemption List","Index":"ID","Date":"Date","Principal":"Principal","Profit":"Profit","Progress":"Progress","Redemption":"Redemption","Pending":"Pending","Redeemed":"Redeemed","Add Asset":"Add Asset","Please enter the amount to add":"Please enter the amount to add","Max":"Max:","Please select the number of days":"Please select the number of days","Confirm":"Confirm","Balance":"Balance:","Approve":"Approve","Copy successful":"Copy successful","Pool added successfully":"Pool added successfully","Pool added failed":"Pool added failed","Insufficient balance":"Insufficient balance","Red":"Redemption","Days":"Days","CI":",compound interest","Please connect wallet first":"Please connect wallet first","No data available":"No data available","Invitation Link":"Invitation Link","Please donate the bottom pool through the invitation link":"Please donate the bottom pool through the invitation link","The inviter has not donated the bottom pool, so you cannot donate the bottom pool temporarily":"The inviter has not donated the bottom pool, so you cannot donate the bottom pool temporarily","Redemption successful":"Redemption successful","Redemption failed":"Redemption failed","Maximum single pledge amount":"Maximum single pledge amount:","Cannot exceed the maximum pledged amount":"Cannot exceed the maximum pledged amount","Please use a valid invitation link.":"Please use a valid invitation link.","Maximum daily pledge amount":"Maximum daily pledge amount:","":""}');

/***/ }),

/***/ 5372:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"Connect":"连接钱包","Home":"首页","Address":"地址","Select Language":"选择语言","My Assets":"我的资产","Donation pool":"捐赠底池","Performance":"业绩","Link":"链接","Investment List":"投资列表","Redemption List":"赎回列表","Index":"序号","Date":"日期","Principal":"本金","Profit":"盈利","Progress":"进展","Redemption":"赎回","Pending":"等待赎回","Redeemed":"已赎回","Add Asset":"增加资产","Please enter the amount to add":"请输入增加金额","Max":"最大：","Please select the number of days":"请选择天数","Confirm":"确认","Balance":"余额：","Approve":"授权","Copy successful":"复制成功","Pool added successfully":"底池添加成功","Pool added failed":"底池添加失败","Insufficient balance":"余额不足","Red":"赎回","Days":"天","CI":"，复利","Please connect wallet first":"请先连接钱包","No data available":"暂无数据","Invitation Link":"邀请链接","Please donate the bottom pool through the invitation link":"请通过邀请链接进行捐赠底池","The inviter has not donated the bottom pool, so you cannot donate the bottom pool temporarily":"邀请人没有捐赠底池，您暂不能捐赠底池","Redemption successful":"赎回成功","Redemption failed":"赎回失败","Maximum single pledge amount":"单笔最大质押金额：","Cannot exceed the maximum pledged amount":"不能大于最大质押金额","Please use a valid invitation link.":"请使用有效邀请链接。","Maximum daily pledge amount":"每日最大质押金额：","":""}');

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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [393], () => (__webpack_require__(969)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;