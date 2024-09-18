'use client'

import { useEffect, useState } from 'react'

export default function AnimatedSVG() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Trigger the animation after the component mounts
    setIsVisible(true)
  }, [])

  return (
    <div className="relative top-20 w-full overflow-hidden">
      <svg className="min-[1920px]:h-full h-[80px] w-auto"  viewBox="0 0 1920 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="1920" height="80" fill="white" />
        <circle cx="6" cy="6" r="3.5" fill="#B10202" stroke="#B10202" />
        <circle cx="191" cy="6" r="3.5" fill="#B10202" stroke="#B10202" />
        <path
          d="M6 6H62L70.5 14.5H157.5L165 7H191.5"
          stroke="#B10202"
          strokeWidth="4"
          strokeDasharray="500"
          style={{ animation: 'svg 2.3s ease-in-out 0.0s infinite' }}
        />
        <circle cx="51" cy="25" r="4" fill="#B10202" />
        <circle cx="6" cy="25" r="4" fill="#B10202" />
        <path
          d="M6 25H47.5"
          stroke="#B10202"
          strokeWidth="4"
          strokeDasharray="500"
          style={{ animation: 'svg 2.3s ease-in-out 0.0s infinite' }}
        />
        <circle cx="51" cy="25" r="4" fill="#B10202" />
        <circle cx="6" cy="25" r="4" fill="#B10202" />
        <path
          d="M6 25H47.5"
          stroke="#B10202"
          strokeWidth="4"
          strokeDasharray="500"
          style={{ animation: 'svg 2.3s ease-in-out 0.0s infinite' }}
        />
        <circle cx="101" cy="35" r="4" fill="#B10202" />
        <circle cx="6" cy="35" r="4" fill="#B10202" />
        <path
          d="M6 35H101"
          stroke="#B10202"
          strokeWidth="4"
          strokeDasharray="500"
          style={{ animation: 'svg 2.3s ease-in-out 0.0s infinite' }}
        />
        <circle cx="6" cy="53" r="4" fill="#B10202" />
        <circle cx="194" cy="70" r="4" fill="#B10202" />
        <path
          d="M6 53H33L42 44H100.5L127 70.5H166H194.5"
          stroke="#B10202"
          strokeWidth="4"
          strokeDasharray="500"
          style={{ animation: 'svg 2.3s ease-in-out 0.0s infinite' }}
        />
        <circle cx="8" cy="15" r="4" fill="#B10202" />
        <circle cx="148" cy="38" r="4" fill="#B10202" />
        <path
          d="M8 15H55L66.5 26.5H105L117 38.5H148"
          stroke="#B10202"
          strokeWidth="4"
          strokeDasharray="500"
          style={{ animation: 'svg 2.3s ease-in-out 0.0s infinite' }}
        />
        <path
          d="M32 65C32 67.2091 30.2091 69 28 69C25.7909 69 24 67.2091 24 65C24 62.7909 25.7909 61 28 61C30.2091 61 32 62.7909 32 65Z"
          fill="#B10202"
        />
        <circle cx="8" cy="65" r="4" fill="#B10202" />
        <path
          d="M8 65H28"
          stroke="#B10202"
          strokeWidth="4"
          strokeDasharray="500"
          style={{ animation: 'svg 2.3s ease-in-out 0.0s infinite' }}
        />
        <circle cx="32" cy="74" r="4" fill="#B10202" />
        <circle cx="53" cy="53" r="4" fill="#B10202" />
        <path
          d="M32 74L53 53"
          stroke="#B10202"
          strokeWidth="4"
          strokeDasharray="500"
          style={{ animation: 'svg 2.3s ease-in-out 0.0s infinite' }}
        />
        <circle cx="45" cy="74" r="4" fill="#B10202" />
        <circle cx="116" cy="74" r="4" fill="#B10202" />
        <path
          d="M45 74L66 53H95.5L116.5 74"
          stroke="#B10202"
          strokeWidth="4"
          strokeDasharray="500"
          style={{ animation: 'svg 2.3s ease-in-out 0.0s infinite' }}
        />
        <circle cx="103" cy="74" r="4" fill="#B10202" />
        <circle cx="58" cy="74" r="4" fill="#B10202" />
        <path
          d="M58 74H99.5"
          stroke="#B10202"
          strokeWidth="4"
          strokeDasharray="500"
          style={{ animation: 'svg 2.3s ease-in-out 0.0s infinite' }}
        />
        <circle cx="150" cy="6" r="4" fill="#B10202" />
        <circle cx="82" cy="6" r="4" fill="#B10202" />
        <path
          d="M82 6H150"
          stroke="#B10202"
          strokeWidth="4"
          strokeDasharray="500"
          style={{ animation: 'svg 2.3s ease-in-out 0.0s infinite' }}
        />
        <circle cx="229" cy="4" r="4" fill="#B10202" />
        <circle cx="126" cy="29" r="4" fill="#B10202" />
        <path
          d="M126 29.0001H147H162.5L176 15.5H198L209 4.5H229"
          stroke="#B10202"
          strokeWidth="4"
          strokeDasharray="500"
          style={{ animation: 'svg 2.3s ease-in-out 0.0s infinite' }}
        />
        <circle cx="311" cy="26" r="4" fill="#B10202" />
        <circle cx="133" cy="63" r="4" fill="#B10202" />
        <path
          d="M133 63H160L185.5 37.5H221H264L275 26.5H311.5"
          stroke="#B10202"
          strokeWidth="4"
          strokeDasharray="500"
          style={{ animation: 'svg 2.3s ease-in-out 0.0s infinite' }}
        />
        <circle cx="261" cy="28" r="4" fill="#B10202" />
        <circle cx="137" cy="51" r="4" fill="#B10202" />
        <path
          d="M137 51.0001H158L180.5 28.5001H219.5L261 28.5"
          stroke="#B10202"
          strokeWidth="4"
          strokeDasharray="500"
          style={{ animation: 'svg 2.3s ease-in-out 0.3s infinite' }}
        />
        <circle cx="190" cy="45" r="4" fill="#B10202" />
        <path
          d="M190 45H265L295.5 75.5H344.5L380.5 39.5H417.5H442L452.5 50H496"
          stroke="#B10202"
          strokeWidth="4"
          strokeDasharray="500"
          style={{ animation: 'svg 2.3s ease-in-out 0.3s infinite' }}
        />
        <circle cx="496" cy="50" r="4" fill="#B10202" />
        <circle cx="192" cy="61" r="4" fill="#B10202" />
        <circle cx="275" cy="74" r="4" fill="#B10202" />
        <path
          d="M192 61H252.5H262L275 74"
          stroke="#B10202"
          strokeWidth="4"
          strokeDasharray="500"
          style={{ animation: 'svg 2.3s ease-in-out 0.3s infinite' }}
        />
        <circle cx="232" cy="20" r="4" fill="#B10202" />
        <circle cx="401" cy="29" r="4" fill="#B10202" />
        <path
          d="M232.5 19.5L240 12L249 3H307.5L334 29.5H373H401.5"
          stroke="#B10202"
          strokeWidth="4"
          strokeDasharray="500"
          style={{ animation: 'svg 2.3s ease-in-out 0.3s infinite' }}
        />
        <path
          d="M279.5 37C279.5 39.2091 277.709 41 275.5 41C273.291 41 271.5 39.2091 271.5 37C271.5 34.7909 273.291 33 275.5 33C277.709 33 279.5 34.7909 279.5 37Z"
          fill="#B10202"
        />
        <circle cx="304" cy="66" r="4" fill="#B10202" />
        <path
          d="M275 37L304.5 66.5"
          stroke="#B10202"
          strokeWidth="4"
          strokeDasharray="500"
          style={{ animation: 'svg 2.3s ease-in-out 0.3s infinite' }}
        />
        <circle cx="342" cy="42" r="4" fill="#B10202" />
        <circle cx="297" cy="42" r="4" fill="#B10202" />
        <path
          d="M297 42H338.5"
          stroke="#B10202"
          strokeWidth="4"
          strokeDasharray="500"
          style={{ animation: 'svg 2.3s ease-in-out 0.3s infinite' }}
        />
        <circle cx="344" cy="58" r="4" fill="#B10202" />
        <circle cx="315" cy="58" r="4" fill="#B10202" />
        <path
          d="M315 58H344"
          stroke="#B10202"
          strokeWidth="4"
          strokeDasharray="500"
          style={{ animation: 'svg 2.3s ease-in-out 0.3s infinite' }}
        />
        <circle cx="328" cy="5" r="4" fill="#B10202" />
        <circle cx="650" cy="54" r="4" fill="#B10202" />
        <path
          d="M328 5H373H418.5H452L476 29H518L563.5 74.5H602.5L623.5 53.5H650"
          stroke="#B10202"
          strokeWidth="4"
          strokeDasharray="500"
          style={{ animation: 'svg 2.3s ease-in-out 0.3s infinite' }}
        />
        <circle cx="509" cy="40" r="4" fill="#B10202" />
        <circle cx="342" cy="15" r="4" fill="#B10202" />
        <path
          d="M342 15H409H430.5L456 40.5H508"
          stroke="#B10202"
          strokeWidth="4"
          strokeDasharray="500"
          style={{ animation: 'svg 2.3s ease-in-out 0.3s infinite' }}
        />
        <circle cx="362" cy="70" r="4" fill="#B10202" />
        <circle cx="383" cy="49" r="4" fill="#B10202" />
        <path
          d="M362 70L383 49"
          stroke="#B10202"
          strokeWidth="4"
          strokeDasharray="500"
          style={{ animation: 'svg 2.3s ease-in-out 0.3s infinite' }}
        />
        <circle cx="380" cy="71" r="4" fill="#B10202" />
        <circle cx="516" cy="61" r="4" fill="#B10202" />
        <path
          d="M380 71L402 49H438.5L450.5 61H516.5"
          stroke="#B10202"
          strokeWidth="4"
          strokeDasharray="500"
          style={{ animation: 'svg 2.3s ease-in-out 0.3s infinite' }}
        />
        <path
          d="M397 72H545.5"
          stroke="#B10202"
          strokeWidth="4"
          strokeDasharray="500"
          style={{ animation: 'svg 2.3s ease-in-out 0.3s infinite' }}
        />
        <circle cx="545" cy="72" r="4" fill="#B10202" />
        <circle cx="397" cy="72" r="4" fill="#B10202" />
        <path
          d="M476 4.5H544.5L561 21H612L628.5 4.5H679.5"
          stroke="#B10202"
          strokeWidth="4"
          strokeDasharray="500"
          style={{ animation: 'svg 2.3s ease-in-out 0.3s infinite' }}
        />
        <circle cx="476" cy="4" r="4" fill="#B10202" />
        <circle cx="679" cy="4" r="4" fill="#B10202" />
        <path
          d="M476 16H504.5"
          stroke="#B10202"
          strokeWidth="4"
          strokeDasharray="500"
          style={{ animation: 'svg 2.3s ease-in-out 0.3s infinite' }}
        />
        <circle cx="476" cy="16" r="4" fill="#B10202" />
        <circle cx="504" cy="16" r="4" fill="#B10202" />
        <path
          d="M524 16L572.5 64.5H598"
          stroke="#B10202"
          strokeWidth="4"
          strokeDasharray="500"
          style={{ animation: 'svg 2.3s ease-in-out 0.3s infinite' }}
        />
        <circle cx="524" cy="16" r="4" fill="#B10202" />
        <circle cx="598" cy="64" r="4" fill="#B10202" />
        <path
          d="M562.5 32.5H617L637 12.5H695L702 5.5H774.5"
          stroke="#B10202"
          strokeWidth="4"
          strokeDasharray="500"
          style={{ animation: 'svg 2.3s ease-in-out 0.3s infinite' }}
        />
        <circle cx="562" cy="32" r="4" fill="#B10202" />
        <circle cx="774" cy="5" r="4" fill="#B10202" />
        <path
          d="M571.5 44H744.5L775 74.5H945.5"
          stroke="#B10202"
          strokeWidth="4"
          strokeDasharray="500"
          style={{ animation: 'svg 2.3s ease-in-out 0.3s infinite' }}
        />
        <circle cx="571" cy="44" r="4" fill="#B10202" />
        <circle cx="945" cy="74" r="4" fill="#B10202" />
        <path
          d="M628.5 70H651.5L666.5 55H737"
          stroke="#B10202"
          strokeWidth="4"
          strokeDasharray="500"
          style={{ animation: 'svg 2.3s ease-in-out 0.5s infinite' }}
        />
        <circle cx="628" cy="70" r="4" fill="#B10202" />
        <circle cx="737" cy="55" r="4" fill="#B10202" />
        <path
          d="M629.5 33.5H733L751.5 15H832.5L846 28.5H900.5"
          stroke="#B10202"
          strokeWidth="4"
          strokeDasharray="500"
          style={{ animation: 'svg 2.3s ease-in-out 0.5s infinite' }}
        />
        <circle cx="629" cy="33" r="4" fill="#B10202" />
        <circle cx="900" cy="28" r="4" fill="#B10202" />
        <path
          d="M642.5 24H719.5"
          stroke="#B10202"
          strokeWidth="4"
          strokeDasharray="500"
          style={{ animation: 'svg 2.3s ease-in-out 0.5s infinite' }}
        />
        <circle cx="642" cy="24" r="4" fill="#B10202" />
        <circle cx="719" cy="24" r="4" fill="#B10202" />
        <path
          d="M669 70H727"
          stroke="#B10202"
          strokeWidth="4"
          strokeDasharray="500"
          style={{ animation: 'svg 2.3s ease-in-out 0.5s infinite' }}
        />
        <circle cx="669" cy="70" r="4" fill="#B10202" />
        <circle cx="727" cy="70" r="4" fill="#B10202" />
        <path
          d="M756.5 28.5H824"
          stroke="#B10202"
          strokeWidth="4"
          strokeDasharray="500"
          style={{ animation: 'svg 2.3s ease-in-out 0.5s infinite' }}
        />
        <circle cx="756" cy="28" r="4" fill="#B10202" />
        <circle cx="824" cy="28" r="4" fill="#B10202" />
        <path
          d="M771 44H946L981 9H1101"
          stroke="#B10202"
          strokeWidth="4"
          strokeDasharray="500"
          style={{ animation: 'svg 2.3s ease-in-out 0.5s infinite' }}
        />
        <circle cx="771" cy="44" r="4" fill="#B10202" />
        <circle cx="1101" cy="9" r="4" fill="#B10202" />
        <path
          d="M786.5 58H946H965.5L980 72.5H1085.5"
          stroke="#B10202"
          strokeWidth="4"
          strokeDasharray="500"
          style={{ animation: 'svg 2.3s ease-in-out 0.5s infinite' }}
        />
        <circle cx="786" cy="58" r="4" fill="#B10202" />
        <circle cx="1085" cy="72" r="4" fill="#B10202" />
        <path
          d="M798 6C798 8.20914 796.209 10 794 10C791.791 10 790 8.20914 790 6C790 3.79086 791.791 2 794 2C796.209 2 798 3.79086 798 6Z"
          fill="#B10202"
        />
        <path
          d="M955 17C955 19.2091 953.209 21 951 21C948.791 21 947 19.2091 947 17C947 14.7909 948.791 13 951 13C953.209 13 955 14.7909 955 17Z"
          fill="#B10202"
        />
        <path
          d="M794 6H845.5L857 17.5H934H951"
          stroke="#B10202"
          strokeWidth="4"
          strokeDasharray="500"
          style={{ animation: 'svg 2.3s ease-in-out 0.5s infinite' }}
        />
        <path
          d="M806 67H933"
          stroke="#B10202"
          strokeWidth="4"
          strokeDasharray="500"
          style={{ animation: 'svg 2.3s ease-in-out 0.5s infinite' }}
        />
        <circle cx="806" cy="67" r="4" fill="#B10202" />
        <circle cx="933" cy="67" r="4" fill="#B10202" />
        <circle cx="872" cy="7" r="4" fill="#B10202" />
        <circle cx="956" cy="7" r="4" fill="#B10202" />
        <path
          d="M872.5 7H956.5"
          stroke="#B10202"
          strokeWidth="4"
          strokeDasharray="500"
          style={{ animation: 'svg 2.3s ease-in-out 0.5s infinite' }}
        />
        <path
          d="M875 36H933"
          stroke="#B10202"
          strokeWidth="4"
          strokeDasharray="500"
          style={{ animation: 'svg 2.3s ease-in-out 0.5s infinite' }}
        />
        <circle cx="875" cy="36" r="4" fill="#B10202" />
        <circle cx="933" cy="36" r="4" fill="#B10202" />
        <path
          d="M971.5 41.5L993.5 19.5H1090L1124.5 54H1205"
          stroke="#B10202"
          strokeWidth="4"
          strokeDasharray="500"
          style={{ animation: 'svg 2.3s ease-in-out 0.5s infinite' }}
        />
        <circle cx="971" cy="42" r="4" fill="#B10202" />
        <circle cx="1205" cy="54" r="4" fill="#B10202" />
        <circle cx="986" cy="64" r="4" fill="#B10202" />
        <circle cx="1188" cy="63" r="4" fill="#B10202" />
        <path
          d="M986.5 63.5L1003 47H1085.5H1098L1114.5 63.5H1189"
          stroke="#B10202"
          strokeWidth="4"
          strokeDasharray="500"
          style={{ animation: 'svg 2.3s ease-in-out 0.5s infinite' }}
        />
        <path
          d="M1001.5 34H1086"
          stroke="#B10202"
          strokeWidth="4"
          strokeDasharray="500"
          style={{ animation: 'svg 2.3s ease-in-out 0.5s infinite' }}
        />
        <circle cx="1001" cy="34" r="4" fill="#B10202" />
        <circle cx="1086" cy="34" r="4" fill="#B10202" />
        <circle cx="1006" cy="59" r="4" fill="#B10202" />
        <circle cx="1090" cy="59" r="4" fill="#B10202" />
        <path
          d="M1006.5 58.5H1090"
          stroke="#B10202"
          strokeWidth="4"
          strokeDasharray="500"
          style={{ animation: 'svg 2.3s ease-in-out 0.5s infinite' }}
        />
        <circle cx="1103" cy="74" r="4" fill="#B10202" />
        <circle cx="1213" cy="74" r="4" fill="#B10202" />
        <path
          d="M1103 74H1213"
          stroke="#B10202"
          strokeWidth="4"
          strokeDasharray="500"
          style={{ animation: 'svg 2.3s ease-in-out 0.5s infinite' }}
        />
        <circle cx="1104" cy="20" r="4" fill="#B10202" />
        <circle cx="1262" cy="20" r="4" fill="#B10202" />
        <path
          d="M1105 20H1133.5L1146.5 7H1225.5L1238.5 20H1261.5"
          stroke="#B10202"
          strokeWidth="4"
          strokeDasharray="500"
          style={{ animation: 'svg 2.3s ease-in-out 0.5s infinite' }}
        />
        <circle cx="1122" cy="31" r="4" fill="#B10202" />
        <circle cx="1319" cy="50" r="4" fill="#B10202" />
        <path
          d="M1122 31.5H1234.5L1253 50H1319"
          stroke="#B10202"
          strokeWidth="4"
          strokeDasharray="500"
          style={{ animation: 'svg 2.3s ease-in-out 0.5s infinite' }}
        />
        <circle cx="1141" cy="41" r="4" fill="#B10202" />
        <circle cx="1225" cy="41" r="4" fill="#B10202" />
        <path
          d="M1141.5 41.5H1224.5"
          stroke="#B10202"
          strokeWidth="4"
          strokeDasharray="500"
          style={{ animation: 'svg 2.3s ease-in-out 0.8s infinite' }}
        />
        <circle cx="1153" cy="17" r="4" fill="#B10202" />
        <circle cx="1213" cy="17" r="4" fill="#B10202" />
        <path
          d="M1153 17H1213.5"
          stroke="#B10202"
          strokeWidth="4"
          strokeDasharray="500"
          style={{ animation: 'svg 2.3s ease-in-out 0.8s infinite' }}
        />
        <circle cx="1262" cy="61" r="4" fill="#B10202" />
        <circle cx="1221" cy="61" r="4" fill="#B10202" />
        <path
          d="M1221 61.5H1262"
          stroke="#B10202"
          strokeWidth="4"
          strokeDasharray="500"
          style={{ animation: 'svg 2.3s ease-in-out 0.8s infinite' }}
        />
        <circle cx="1236" cy="71" r="4" fill="#B10202" />
        <circle cx="1447" cy="7" r="4" fill="#B10202" />
        <path
          d="M1236.5 71.5H1271L1283 59.5H1320H1344L1360 43.5L1396 7.5H1447"
          stroke="#B10202"
          strokeWidth="4"
          strokeDasharray="500"
          style={{ animation: 'svg 2.3s ease-in-out 0.8s infinite' }}
        />
        <circle cx="1270" cy="42" r="4" fill="#B10202" />
        <circle cx="1306" cy="6" r="4" fill="#B10202" />
        <path
          d="M1270.5 42L1306 6.5"
          stroke="#B10202"
          strokeWidth="4"
          strokeDasharray="500"
          style={{ animation: 'svg 2.3s ease-in-out 0.8s infinite' }}
        />
        <circle cx="1496" cy="76" r="4" fill="#B10202" />
        <circle cx="1291" cy="73" r="4" fill="#B10202" />
        <path
          d="M1291.5 73H1342L1352 63H1387.5L1400.5 76H1472H1496.5"
          stroke="#B10202"
          strokeWidth="4"
          strokeDasharray="500"
          style={{ animation: 'svg 2.3s ease-in-out 0.8s infinite' }}
        />
        <circle cx="1295" cy="41" r="4" fill="#B10202" />
        <circle cx="1330" cy="6" r="4" fill="#B10202" />
        <path
          d="M1295 41.5L1330.5 6"
          stroke="#B10202"
          strokeWidth="4"
          strokeDasharray="500"
          style={{ animation: 'svg 2.3s ease-in-out 0.8s infinite' }}
        />
        <circle cx="1315" cy="40" r="4" fill="#B10202" />
        <circle cx="1351" cy="40" r="4" fill="#B10202" />
        <path
          d="M1315 40.5H1351"
          stroke="#B10202"
          strokeWidth="4"
          strokeDasharray="500"
          style={{ animation: 'svg 2.3s ease-in-out 0.8s infinite' }}
        />
        <circle cx="1326" cy="31" r="4" fill="#B10202" />
        <circle cx="1377" cy="6" r="4" fill="#B10202" />
        <path
          d="M1326 31H1352L1377 6"
          stroke="#B10202"
          strokeWidth="4"
          strokeDasharray="500"
          style={{ animation: 'svg 2.3s ease-in-out 0.8s infinite' }}
        />
        <circle cx="1360" cy="54" r="4" fill="#B10202" />
        <circle cx="1445" cy="67" r="4" fill="#B10202" />
        <path
          d="M1359.5 54.5H1397.5L1410.5 67.5H1445.5"
          stroke="#B10202"
          strokeWidth="4"
          strokeDasharray="500"
          style={{ animation: 'svg 2.3s ease-in-out 0.8s infinite' }}
        />
        <circle cx="1377" cy="37" r="4" fill="#B10202" />
        <circle cx="1484" cy="58" r="4" fill="#B10202" />
        <path
          d="M1375 37.5H1409.5H1439L1460 58.5H1484.5"
          stroke="#B10202"
          strokeWidth="4"
          strokeDasharray="500"
          style={{ animation: 'svg 2.3s ease-in-out 0.8s infinite' }}
        />
        <circle cx="1396" cy="26" r="4" fill="#B10202" />
        <circle cx="1469" cy="26" r="4" fill="#B10202" />
        <path
          d="M1397 26.5H1469.5"
          stroke="#B10202"
          strokeWidth="4"
          strokeDasharray="500"
          style={{ animation: 'svg 2.3s ease-in-out 0.8s infinite' }}
        />
        <circle cx="1399" cy="17" r="4" fill="#B10202" />
        <circle cx="1559" cy="17" r="4" fill="#B10202" />
        <path
          d="M1399.5 17H1478L1488 27H1521L1531 17H1559"
          stroke="#B10202"
          strokeWidth="4"
          strokeDasharray="500"
          style={{ animation: 'svg 2.3s ease-in-out 0.8s infinite' }}
        />
        <circle cx="1453" cy="37" r="4" fill="#B10202" />
        <circle cx="1578" cy="24" r="4" fill="#B10202" />
        <path
          d="M1453 37H1524L1537 24H1578"
          stroke="#B10202"
          strokeWidth="4"
          strokeDasharray="500"
          style={{ animation: 'svg 2.3s ease-in-out 1.0s infinite' }}
        />
        <circle cx="1463" cy="7" r="4" fill="#B10202" />
        <circle cx="1573" cy="7" r="4" fill="#B10202" />
        <path
          d="M1463.5 7H1573.5"
          stroke="#B10202"
          strokeWidth="4"
          strokeDasharray="500"
          style={{ animation: 'svg 2.3s ease-in-out 1.0s infinite' }}
        />
        <circle cx="1463" cy="45" r="4" fill="#B10202" />
        <circle cx="1586" cy="56" r="4" fill="#B10202" />
        <path
          d="M1463 45.5H1530.5L1541.5 56.5H1586"
          stroke="#B10202"
          strokeWidth="4"
          strokeDasharray="500"
          style={{ animation: 'svg 2.3s ease-in-out 1.0s infinite' }}
        />
        <circle cx="1495" cy="65" r="4" fill="#B10202" />
        <circle cx="1694" cy="47" r="4" fill="#B10202" />
        <path
          d="M1495 65H1530L1540 75H1590H1626L1654 47H1693.5"
          stroke="#B10202"
          strokeWidth="4"
          strokeDasharray="500"
          style={{ animation: 'svg 2.3s ease-in-out 1.0s infinite' }}
        />
        <circle cx="1602" cy="37" r="4" fill="#B10202" />
        <circle cx="1541" cy="37" r="4" fill="#B10202" />
        <path
          d="M1541 37H1602"
          stroke="#B10202"
          strokeWidth="4"
          strokeDasharray="500"
          style={{ animation: 'svg 2.3s ease-in-out 1.0s infinite' }}
        />
        <circle cx="1549" cy="66" r="4" fill="#B10202" />
        <circle cx="1603" cy="66" r="4" fill="#B10202" />
        <path
          d="M1549 66H1602.5"
          stroke="#B10202"
          strokeWidth="4"
          strokeDasharray="500"
          style={{ animation: 'svg 2.3s ease-in-out 1.0s infinite' }}
        />
        <circle cx="1560" cy="47" r="4" fill="#B10202" />
        <circle cx="1614" cy="47" r="4" fill="#B10202" />
        <path
          d="M1560 47H1613.5"
          stroke="#B10202"
          strokeWidth="4"
          strokeDasharray="500"
          style={{ animation: 'svg 2.3s ease-in-out 1.0s infinite' }}
        />
        <circle cx="1635" cy="50" r="4" fill="#B10202" />
        <circle cx="1592" cy="8" r="4" fill="#B10202" />
        <path
          d="M1592.5 7.5L1635 50"
          stroke="#B10202"
          strokeWidth="4"
          strokeDasharray="500"
          style={{ animation: 'svg 2.3s ease-in-out 1.0s infinite' }}
        />
        <circle cx="1617" cy="4" r="4" fill="#B10202" />
        <circle cx="1735" cy="17" r="4" fill="#B10202" />
        <path
          d="M1618 4H1683L1696.5 17.5H1735"
          stroke="#B10202"
          strokeWidth="4"
          strokeDasharray="500"
          style={{ animation: 'svg 2.3s ease-in-out 1.0s infinite' }}
        />
        <circle cx="1624" cy="14" r="4" fill="#B10202" />
        <circle cx="1676.5" cy="14" r="4" fill="#B10202" />
        <path
          d="M1625 14H1676.5"
          stroke="#B10202"
          strokeWidth="4"
          strokeDasharray="500"
          style={{ animation: 'svg 2.3s ease-in-out 1.0s infinite' }}
        />
        <circle cx="1636" cy="28" r="4" fill="#B10202" />
        <circle cx="1821" cy="5" r="4" fill="#B10202" />
        <path
          d="M1636 28H1753L1775.5 5.5H1820.5"
          stroke="#B10202"
          strokeWidth="4"
          strokeDasharray="500"
          style={{ animation: 'svg 2.3s ease-in-out 1.3s infinite' }}
        />
        <path
          d="M1652.5 73.5H1735L1752.5 56H1808L1825.5 73.5H1879.5"
          stroke="#B10202"
          strokeWidth="4"
          strokeDasharray="500"
          style={{ animation: 'svg 2.3s ease-in-out 1.3s infinite' }}
        />
        <circle cx="1652" cy="73" r="4" fill="#B10202" />
        <circle cx="1879" cy="73" r="4" fill="#B10202" />
        <path
          d="M1655.5 56L1665.5 66H1729.5"
          stroke="#B10202"
          strokeWidth="4"
          strokeDasharray="500"
          style={{ animation: 'svg 2.3s ease-in-out 1.3s infinite' }}
        />
        <circle cx="1730" cy="66" r="4" fill="#B10202" />
        <circle cx="1656" cy="56" r="4" fill="#B10202" />
        <circle cx="1659" cy="36" r="4" fill="#B10202" />
        <circle cx="1741" cy="36" r="4" fill="#B10202" />
        <path
          d="M1658.5 36.5H1741"
          stroke="#B10202"
          strokeWidth="4"
          strokeDasharray="500"
          style={{ animation: 'svg 2.3s ease-in-out 1.3s infinite' }}
        />
        <path
          d="M1673 57H1733.5"
          stroke="#B10202"
          strokeWidth="4"
          strokeDasharray="500"
          style={{ animation: 'svg 2.3s ease-in-out 1.3s infinite' }}
        />
        <circle cx="1673" cy="57" r="4" fill="#B10202" />
        <circle cx="1733" cy="57" r="4" fill="#B10202" />
        <path
          d="M1706 5H1753.5"
          stroke="#B10202"
          strokeWidth="4"
          strokeDasharray="500"
          style={{ animation: 'svg 2.3s ease-in-out 1.3s infinite' }}
        />
        <circle cx="1706" cy="5" r="4" fill="#B10202" />
        <circle cx="1754" cy="5" r="4" fill="#B10202" />
        <path
          d="M1706.5 47H1758.5L1769.5 36H1821"
          stroke="#B10202"
          strokeWidth="4"
          strokeDasharray="500"
          style={{ animation: 'svg 2.3s ease-in-out 1.3s infinite' }}
        />
        <circle cx="1707" cy="47" r="4" fill="#B10202" />
        <circle cx="1821" cy="36" r="4" fill="#B10202" />
        <path
          d="M1754.5 69H1805"
          stroke="#B10202"
          strokeWidth="4"
          strokeDasharray="500"
          style={{ animation: 'svg 2.3s ease-in-out 1.3s infinite' }}
        />
        <circle cx="1754" cy="69" r="4" fill="#B10202" />
        <circle cx="1805" cy="69" r="4" fill="#B10202" />
        <path
          d="M1773.5 24.5H1830.5"
          stroke="#B10202"
          strokeWidth="4"
          strokeDasharray="500"
          style={{ animation: 'svg 2.3s ease-in-out 1.3s infinite' }}
        />
        <circle cx="1831" cy="24" r="4" fill="#B10202" />
        <circle cx="1773" cy="24" r="4" fill="#B10202" />
        <path
          d="M1777.5 44H1848"
          stroke="#B10202"
          strokeWidth="4"
          strokeDasharray="500"
          style={{ animation: 'svg 2.3s ease-in-out 1.3s infinite' }}
        />
        <circle cx="1777" cy="44" r="4" fill="#B10202" />
        <circle cx="1848" cy="44" r="4" fill="#B10202" />
        <path
          d="M1779 14H1832.5L1842.5 4H1908.5H1915"
          stroke="#B10202"
          strokeWidth="4"
          strokeDasharray="500"
          style={{ animation: 'svg 2.3s ease-in-out 1.3s infinite' }}
        />
        <circle cx="1915" cy="4" r="4" fill="#B10202" />
        <circle cx="1779" cy="14" r="4" fill="#B10202" />
        <path
          d="M1818 54H1863.5H1866.5H1870.5L1890 73.5H1916"
          stroke="#B10202"
          strokeWidth="4"
          strokeDasharray="500"
          style={{ animation: 'svg 2.3s ease-in-out 1.3s infinite' }}
        />
        <circle cx="1818" cy="54" r="4" fill="#B10202" />
        <circle cx="1915" cy="73" r="4" fill="#B10202" />
        <path
          d="M1838 35.5L1862 11.5"
          stroke="#B10202"
          strokeWidth="4"
          strokeDasharray="500"
          style={{ animation: 'svg 2.3s ease-in-out 1.3s infinite' }}
        />
        <circle cx="1862" cy="11" r="4" fill="#B10202" />
        <circle cx="1838" cy="35" r="4" fill="#B10202" />
        <path
          d="M1855 35H1914"
          stroke="#B10202"
          strokeWidth="4"
          strokeDasharray="500"
          style={{ animation: 'svg 2.3s ease-in-out 1.3s infinite' }}
        />
        <circle cx="1855" cy="35" r="4" fill="#B10202" />
        <circle cx="1914" cy="35" r="4" fill="#B10202" />
        <path
          d="M1866 23.5H1903"
          stroke="#B10202"
          strokeWidth="4"
          strokeDasharray="500"
          style={{ animation: 'svg 2.3s ease-in-out 1.3s infinite' }}
        />
        <circle cx="1866" cy="23" r="4" fill="#B10202" />
        <circle cx="1903" cy="23" r="4" fill="#B10202" />
        <path
          d="M1867 45H1878.5L1887 53.5H1915.5"
          stroke="#B10202"
          strokeWidth="4"
          strokeDasharray="500"
          style={{ animation: 'svg 2.3s ease-in-out 1.3s infinite' }}
        />
        <circle cx="1867" cy="45" r="4" fill="#B10202" />
        <circle cx="1916" cy="53" r="4" fill="#B10202" />
        <path
          d="M1876 14.5H1912.5"
          stroke="#B10202"
          strokeWidth="4"
          strokeDasharray="500"
          style={{ animation: 'svg 2.3s ease-in-out 1.3s infinite' }}
        />
        <circle cx="1913" cy="14" r="4" fill="#B10202" />
        <circle cx="1876" cy="14" r="4" fill="#B10202" />
      </svg>

      {/* strokeDasharray="300" strokeDashoffset={isVisible ? '0' : '300'}
      style=
      {{
        transition: 'stroke-dashoffset 0.5s ease-in-out 0.0s',
      }} */}
    </div>
  )
}
