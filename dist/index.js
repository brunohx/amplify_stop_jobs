module.exports=(()=>{"use strict";var e={182:(e,t,o)=>{o.r(t);const r=require("@actions/core");const n=require("aws-sdk");const a=r.getInput("appId");const i=r.getInput("branchName");const s=r.getInput("region");var _=new n.Amplify({region:s});_.listJobs({appId:a,branchName:i},function(e,t){if(e)console.log(e,e.stack);t.jobSummaries.filter(e=>e.status==="PENDING").forEach(e=>{const{jobId:t}=e;_.stopJob({appId:a,branchName:i,jobId:t},function(e,t){if(e)console.log(e,e.stack);else console.log(t)})})})}};var t={};function __nccwpck_require__(o){if(t[o]){return t[o].exports}var r=t[o]={exports:{}};var n=true;try{e[o](r,r.exports,__nccwpck_require__);n=false}finally{if(n)delete t[o]}return r.exports}(()=>{__nccwpck_require__.r=(e=>{if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(e,"__esModule",{value:true})})})();__nccwpck_require__.ab=__dirname+"/";return __nccwpck_require__(182)})();