"use client";
import {
  CartesianGrid,
  Line,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Cell,
  Bar
} from "recharts";
import Image from "next/image";
import HeroBg from ".././utils/images/hero-bg.png";
import HeroBgBackground from ".././utils/images/hero-bg-background.png";
import {useState} from 'react'
const Hero = () => {

  const [hoveredBar,setHoveredBar]=useState(null);

  const handleMouseEnter =(index:any)=>{
    setHoveredBar(index)
  }
  const handleMouseLeave =()=>{
    setHoveredBar(null)
  }

  const data = [
    {
      name: "JAN",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "FEB",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "MAR",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: " APR",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: " MAY",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: " JUNE",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: " JULY",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: " AUG",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: " SEP",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: " OCT",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: " NOV",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: " DEC",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  const YAxisData = [
    {data:6000},
    {data:4000},
    {data:3000},
    {data:2000},
    {data:1000},
    {data:0},
  ]

  function CustomTooltip({ payload, label, active }:any) {
    const value = payload[0]?.value;
    if (active) {
      return (
        <div className="custom-tooltip relative flex items-center justify-center">
          <svg
            className="absolute "
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="32"
            viewBox="0 0 80 32"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 5C0 2.23858 2.23858 0 5 0H75C77.7614 0 80 2.23858 80 5V21C80 23.7614 77.7614 26 75 26L46 26L40 31.9771L34 26L5 26C2.23858 26 0 23.7614 0 21V5Z"
              fill="#090C2C"
            />
          </svg>
          <p className="text-white text-xs font-medium z-50 mb-1">{value}</p>
        </div>
      );
    }

    return null;
  }

  const DashboardData = [
    {
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            opacity="0.4"
            d="M19.3499 5.65995L13.0599 2.27C12.3999 1.91 11.5999 1.91 10.9299 2.27L4.63992 5.65995C4.17992 5.90995 3.8999 6.39998 3.8999 6.93998C3.8999 7.47998 4.17992 7.96995 4.63992 8.21995L10.9299 11.61C11.2599 11.79 11.6299 11.88 11.9899 11.88C12.3499 11.88 12.7199 11.79 13.0499 11.61L19.3399 8.21995C19.7999 7.96995 20.0799 7.47998 20.0799 6.93998C20.0999 6.39998 19.8099 5.90995 19.3499 5.65995Z"
            fill="#34CAA5"
          />
          <path
            opacity="0.4"
            d="M9.90021 12.79L4.0502 9.86001C3.6002 9.63001 3.08021 9.66001 2.65021 9.92001C2.22021 10.18 1.97021 10.64 1.97021 11.14V16.67C1.97021 17.63 2.5002 18.49 3.3602 18.92L9.21021 21.8401C9.4102 21.9401 9.63022 21.99 9.85022 21.99C10.1102 21.99 10.3702 21.92 10.6002 21.77C11.0302 21.51 11.2802 21.05 11.2802 20.55V15.02C11.2902 14.08 10.7602 13.22 9.90021 12.79Z"
            fill="#34CAA5"
          />
          <path
            opacity="0.4"
            d="M22.03 11.15V15.74C22.02 15.73 22.01 15.71 22 15.7C22 15.69 21.99 15.68 21.98 15.67C21.94 15.61 21.89 15.55 21.84 15.5C21.83 15.49 21.82 15.47 21.81 15.46C21 14.56 19.81 14 18.5 14C17.24 14 16.09 14.52 15.27 15.36C14.48 16.17 14 17.28 14 18.5C14 19.34 14.24 20.14 14.65 20.82C14.82 21.11 15.03 21.37 15.26 21.61L14.79 21.85C14.59 21.95 14.37 22 14.15 22C13.89 22 13.63 21.93 13.39 21.78C12.97 21.52 12.71 21.06 12.71 20.56V15.04C12.71 14.08 13.24 13.22 14.1 12.79L19.95 9.87C20.4 9.64 20.92 9.66 21.35 9.93C21.77 10.19 22.03 10.65 22.03 11.15Z"
            fill="#34CAA5"
          />
          <path
            d="M21.98 15.67C21.16 14.66 19.91 14.02 18.5 14.02C17.44 14.02 16.46 14.39 15.69 15.01C14.65 15.83 14 17.1 14 18.52C14 19.36 14.24 20.16 14.65 20.84C14.92 21.29 15.26 21.68 15.66 22H15.67C16.44 22.64 17.43 23.02 18.5 23.02C19.64 23.02 20.67 22.6 21.46 21.9C21.81 21.6 22.11 21.24 22.35 20.84C22.76 20.16 23 19.36 23 18.52C23 17.44 22.62 16.44 21.98 15.67ZM20.76 17.96L18.36 20.18C18.22 20.31 18.03 20.38 17.85 20.38C17.66 20.38 17.47 20.31 17.32 20.16L16.21 19.05C15.92 18.76 15.92 18.28 16.21 17.99C16.5 17.7 16.98 17.7 17.27 17.99L17.87 18.59L19.74 16.86C20.04 16.58 20.52 16.6 20.8 16.9C21.09 17.21 21.07 17.68 20.76 17.96Z"
            fill="#34CAA5"
          />
        </svg>
      ),
      svg2: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="106"
          height="33"
          viewBox="0 0 106 33"
          fill="none"
        >
          <path
            d="M102.994 8.46666H105V33L1 33V11.4536L4.00877 18.9203L5.20413 21.9069H6.60551L9.40827 18.9203L11.3702 21.907L17.256 21.9072L20.339 18.9204L22.0207 14.4396L24.4683 16.6803L26.6747 18.9203L27.3638 22.3333L28.7651 21.9069H30.4858L33.6952 11.4536L34.6981 14.4403L36.3028 11.4536L37.5063 16.6803L40.7156 7.72028L42.5209 11.4536H45.9308L49.5413 3.98696L51.7477 7.72028L54.6535 5.48L58.194 11.4533L60.4704 1L62.1179 11.4533L73.1072 15.9333L74.5113 12.9466H75.9153L79.1247 8.46666H82.334L83.5375 12.9466L88.3515 3.98666L90.3574 15.9333L91.3603 11.4533H93.5667L95.5726 1L97.5784 9.95999L98.5813 5.48H101.189L102.994 8.46666Z"
            fill="url(#paint0_linear_2132_4599)"
            fill-opacity="0.16"
          />
          <path
            d="M105 8.4667H102.994L101.189 5.48004H98.5813L97.5784 9.96003L95.5726 1.00004L93.5667 11.4534H91.3603L90.3574 15.9333L88.3515 3.9867L83.5375 12.9467L82.334 8.4667H79.1247L75.9153 12.9467H74.5113L73.1072 15.9333L62.1179 11.4534L60.4704 1.00004L58.194 11.4534L54.6535 5.48004L51.7477 7.72032L49.5413 3.987L45.9308 11.4536H42.5209L40.7156 7.72032L37.5063 16.6803L36.3028 11.4536L34.6981 14.4403L33.6952 11.4536L30.4858 21.907H28.7651L27.3638 22.3334L26.6747 18.9203L24.4683 16.6803L22.0206 14.4396L20.339 18.9204L17.256 21.9073L11.3702 21.907L9.40827 18.9203L6.60551 21.907H5.20414L4.00877 18.9203L1 11.4536"
            stroke="#66C87B"
            stroke-linecap="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear_2132_4599"
              x1="53"
              y1="33"
              x2="53"
              y2="1"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#77B900" stop-opacity="0" />
              <stop offset="0.809892" stop-color="#77B900" />
            </linearGradient>
          </defs>
        </svg>
      ),
      svg3: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
        >
          <path
            d="M0.5 5.5L3.5 2.5L5.5 4.5L9.5 0.5"
            stroke="#34CAA5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6 0.5H9.5V4"
            stroke="#34CAA5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      name: "Total Order",
      data: 350,
      color: "#34CAA5",
      bg: "rgba(52, 202, 165, 0.12);",
    },
    {
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.57821 2.91194C4.8091 3.55436 2.75 6.03342 2.75 9C2.75 9.41421 2.41421 9.75 2 9.75C1.58579 9.75 1.25 9.41421 1.25 9C1.25 4.71579 4.71579 1.25 9 1.25C9.2702 1.25 9.51952 1.39534 9.65265 1.63047C9.78578 1.8656 9.78214 2.15417 9.64312 2.38587L8.59313 4.13587C8.38002 4.49105 7.91933 4.60623 7.56414 4.39312C7.20896 4.18001 7.09378 3.71932 7.30689 3.36413L7.57821 2.91194ZM22 14.25C22.4142 14.25 22.75 14.5858 22.75 15C22.75 19.2842 19.2842 22.75 15 22.75C14.7298 22.75 14.4805 22.6047 14.3474 22.3695C14.2142 22.1344 14.2179 21.8458 14.3569 21.6141L15.4069 19.8641C15.62 19.5089 16.0807 19.3938 16.4359 19.6069C16.791 19.82 16.9062 20.2807 16.6931 20.6359L16.4218 21.0881C19.1909 20.4456 21.25 17.9666 21.25 15C21.25 14.5858 21.5858 14.25 22 14.25Z"
            fill="#34CAA5"
          />
          <path
            d="M16.4004 8.20996L12.6404 6.17996C12.2404 5.96996 11.7704 5.96996 11.3704 6.17996L7.61038 8.20996C7.34038 8.35996 7.17041 8.64996 7.17041 8.97996C7.17041 9.30996 7.34038 9.59996 7.61038 9.74996L11.3704 11.78C11.5704 11.89 11.7904 11.94 12.0104 11.94C12.2304 11.94 12.4504 11.89 12.6504 11.78L16.4104 9.74996C16.6804 9.59996 16.8504 9.30996 16.8504 8.97996C16.8404 8.64996 16.6704 8.35996 16.4004 8.20996Z"
            fill="#34CAA5"
          />
          <path
            opacity="0.4"
            d="M10.7402 12.4699L7.24023 10.7199C6.97023 10.5899 6.66024 10.5999 6.40024 10.7599C6.14024 10.9199 5.99023 11.1899 5.99023 11.4899V14.7999C5.99023 15.3699 6.31025 15.8899 6.82025 16.1399L10.3203 17.8899C10.4403 17.9499 10.5702 17.9799 10.7102 17.9799C10.8702 17.9799 11.0202 17.9399 11.1602 17.8499C11.4202 17.6899 11.5703 17.4199 11.5703 17.1199V13.8099C11.5703 13.2399 11.2602 12.7299 10.7402 12.4699Z"
            fill="#34CAA5"
          />
          <path
            opacity="0.4"
            d="M17.5904 10.7599C17.3304 10.5999 17.0204 10.5899 16.7504 10.7199L13.2504 12.4699C12.7404 12.7299 12.4204 13.2399 12.4204 13.8099V17.1199C12.4204 17.4199 12.5704 17.6899 12.8304 17.8499C12.9704 17.9399 13.1204 17.9799 13.2804 17.9799C13.4104 17.9799 13.5404 17.9499 13.6704 17.8899L17.1704 16.1399C17.6804 15.8799 18.0004 15.3699 18.0004 14.7999V11.4899C18.0004 11.1899 17.8504 10.9199 17.5904 10.7599Z"
            fill="#34CAA5"
          />
        </svg>
      ),
      svg2: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="106"
          height="33"
          viewBox="0 0 106 33"
          fill="none"
        >
          <path
            d="M3.00584 8.46666H1L1 33L105 33V11.4536L101.991 18.9203L100.796 21.9069H99.3945L96.5917 18.9203L94.6298 21.907L88.744 21.9072L85.661 18.9204L83.9793 14.4396L81.5317 16.6803L79.3253 18.9203L78.6362 22.3333L77.2349 21.9069H75.5142L72.3048 11.4536L71.3019 14.4403L69.6972 11.4536L68.4937 16.6803L65.2844 7.72028L63.4791 11.4536H60.0692L56.4587 3.98696L54.2523 7.72028L51.3465 5.48L47.806 11.4533L45.5296 1L43.8821 11.4533L32.8928 15.9333L31.4887 12.9466H30.0847L26.8753 8.46666H23.666L22.4625 12.9466L17.6485 3.98666L15.6426 15.9333L14.6397 11.4533H12.4333L10.4274 1L8.4216 9.95999L7.41868 5.48H4.81109L3.00584 8.46666Z"
            fill="url(#paint0_linear_2133_4687)"
            fill-opacity="0.16"
          />
          <path
            d="M1 8.4667H3.00584L4.81109 5.48004H7.41868L8.4216 9.96003L10.4274 1.00004L12.4333 11.4534H14.6397L15.6426 15.9333L17.6485 3.9867L22.4625 12.9467L23.666 8.4667H26.8753L30.0847 12.9467H31.4887L32.8928 15.9333L43.8821 11.4534L45.5296 1.00004L47.806 11.4534L51.3465 5.48004L54.2523 7.72032L56.4587 3.987L60.0692 11.4536H63.4791L65.2844 7.72032L68.4937 16.6803L69.6972 11.4536L71.3019 14.4403L72.3048 11.4536L75.5142 21.907H77.2349L78.6362 22.3334L79.3253 18.9203L81.5317 16.6803L83.9794 14.4396L85.661 18.9204L88.744 21.9073L94.6298 21.907L96.5917 18.9203L99.3945 21.907H100.796L101.991 18.9203L105 11.4536"
            stroke="#ED544E"
            stroke-linecap="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear_2133_4687"
              x1="53"
              y1="33"
              x2="53"
              y2="1"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#ED544E" stop-opacity="0" />
              <stop offset="0.809892" stop-color="#ED544E" />
            </linearGradient>
          </defs>
        </svg>
      ),
      svg3: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
        >
          <path
            d="M0.5 0.5L3.5 3.5L5.5 1.5L9.5 5.5"
            stroke="#ED544E"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6 5.5H9.5V2"
            stroke="#ED544E"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      name: "Total Refund",
      data: 270,
      bg: "rgba(237, 84, 78, 0.12);",
      color: "#ED544E",
    },
    {
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M16.25 22.5C17.2165 22.5 18 21.7165 18 20.75C18 19.7835 17.2165 19 16.25 19C15.2835 19 14.5 19.7835 14.5 20.75C14.5 21.7165 15.2835 22.5 16.25 22.5Z"
            fill="#34CAA5"
          />
          <path
            d="M8.25 22.5C9.2165 22.5 10 21.7165 10 20.75C10 19.7835 9.2165 19 8.25 19C7.2835 19 6.5 19.7835 6.5 20.75C6.5 21.7165 7.2835 22.5 8.25 22.5Z"
            fill="#34CAA5"
          />
          <path
            opacity="0.4"
            d="M4.84 3.94L4.64 6.39C4.6 6.86 4.97 7.25 5.44 7.25H20.75C21.17 7.25 21.52 6.92999 21.55 6.50999C21.68 4.73999 20.33 3.3 18.56 3.3H6.28999C6.18999 2.86 5.98999 2.44 5.67999 2.09C5.18999 1.56 4.49 1.25 3.77 1.25H2C1.59 1.25 1.25 1.59 1.25 2C1.25 2.41 1.59 2.75 2 2.75H3.74001C4.05001 2.75 4.34 2.88001 4.55 3.10001C4.76 3.33001 4.86 3.63 4.84 3.94Z"
            fill="#34CAA5"
          />
          <path
            d="M20.5101 8.75H5.17006C4.75006 8.75 4.41005 9.07 4.37005 9.48L4.01005 13.83C3.87005 15.53 5.21006 17 6.92006 17H18.0401C19.5401 17 20.8601 15.77 20.9701 14.27L21.3001 9.60001C21.3401 9.14001 20.9801 8.75 20.5101 8.75Z"
            fill="#34CAA5"
          />
        </svg>
      ),
      svg2: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="106"
          height="33"
          viewBox="0 0 106 33"
          fill="none"
        >
          <path
            d="M3.00584 8.46666H1L1 33L105 33V11.4536L101.991 18.9203L100.796 21.9069H99.3945L96.5917 18.9203L94.6298 21.907L88.744 21.9072L85.661 18.9204L83.9793 14.4396L81.5317 16.6803L79.3253 18.9203L78.6362 22.3333L77.2349 21.9069H75.5142L72.3048 11.4536L71.3019 14.4403L69.6972 11.4536L68.4937 16.6803L65.2844 7.72028L63.4791 11.4536H60.0692L56.4587 3.98696L54.2523 7.72028L51.3465 5.48L47.806 11.4533L45.5296 1L43.8821 11.4533L32.8928 15.9333L31.4887 12.9466H30.0847L26.8753 8.46666H23.666L22.4625 12.9466L17.6485 3.98666L15.6426 15.9333L14.6397 11.4533H12.4333L10.4274 1L8.4216 9.95999L7.41868 5.48H4.81109L3.00584 8.46666Z"
            fill="url(#paint0_linear_2133_4778)"
            fill-opacity="0.16"
          />
          <path
            d="M1 8.4667H3.00584L4.81109 5.48004H7.41868L8.4216 9.96003L10.4274 1.00004L12.4333 11.4534H14.6397L15.6426 15.9333L17.6485 3.9867L22.4625 12.9467L23.666 8.4667H26.8753L30.0847 12.9467H31.4887L32.8928 15.9333L43.8821 11.4534L45.5296 1.00004L47.806 11.4534L51.3465 5.48004L54.2523 7.72032L56.4587 3.987L60.0692 11.4536H63.4791L65.2844 7.72032L68.4937 16.6803L69.6972 11.4536L71.3019 14.4403L72.3048 11.4536L75.5142 21.907H77.2349L78.6362 22.3334L79.3253 18.9203L81.5317 16.6803L83.9794 14.4396L85.661 18.9204L88.744 21.9073L94.6298 21.907L96.5917 18.9203L99.3945 21.907H100.796L101.991 18.9203L105 11.4536"
            stroke="#ED544E"
            stroke-linecap="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear_2133_4778"
              x1="53"
              y1="33"
              x2="53"
              y2="1"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#ED544E" stop-opacity="0" />
              <stop offset="0.809892" stop-color="#ED544E" />
            </linearGradient>
          </defs>
        </svg>
      ),
      svg3: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
        >
          <path
            d="M0.5 0.5L3.5 3.5L5.5 1.5L9.5 5.5"
            stroke="#ED544E"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6 5.5H9.5V2"
            stroke="#ED544E"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      name: "Average Sales",
      data: 1567,
      bg: "rgba(237, 84, 78, 0.12);",
      color: "#ED544E",
    },
    {
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            opacity="0.4"
            d="M9.99 17.98C14.4028 17.98 17.98 14.4028 17.98 9.99C17.98 5.57724 14.4028 2 9.99 2C5.57724 2 2 5.57724 2 9.99C2 14.4028 5.57724 17.98 9.99 17.98Z"
            fill="#34CAA5"
          />
          <path
            d="M21.9701 15.99C21.9701 19.29 19.2901 21.97 15.9901 21.97C13.9501 21.97 12.1601 20.95 11.0801 19.4C15.4401 18.91 18.9101 15.44 19.4001 11.08C20.9501 12.16 21.9701 13.95 21.9701 15.99Z"
            fill="#34CAA5"
          />
          <path
            d="M11.45 9.71003L9.05 8.87003C8.81 8.79003 8.76 8.77003 8.76 8.42003C8.76 8.16003 8.94 7.95003 9.17 7.95003H10.67C10.99 7.95003 11.25 8.24003 11.25 8.60003C11.25 9.01003 11.59 9.35003 12 9.35003C12.41 9.35003 12.75 9.01003 12.75 8.60003C12.75 7.45003 11.86 6.51003 10.75 6.46003V6.41003C10.75 6.00003 10.41 5.66003 10 5.66003C9.59 5.66003 9.25 5.99003 9.25 6.41003V6.46003H9.16C8.11 6.46003 7.25 7.34003 7.25 8.43003C7.25 9.38003 7.67 9.99003 8.54 10.29L10.95 11.13C11.19 11.21 11.24 11.23 11.24 11.58C11.24 11.84 11.06 12.05 10.83 12.05H9.33C9.01 12.05 8.75 11.76 8.75 11.4C8.75 10.99 8.41 10.65 8 10.65C7.59 10.65 7.25 10.99 7.25 11.4C7.25 12.55 8.14 13.49 9.25 13.54V13.6C9.25 14.01 9.59 14.35 10 14.35C10.41 14.35 10.75 14.01 10.75 13.6V13.55H10.84C11.89 13.55 12.75 12.67 12.75 11.58C12.75 10.63 12.32 10.02 11.45 9.71003Z"
            fill="#34CAA5"
          />
        </svg>
      ),
      svg2: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="106"
          height="33"
          viewBox="0 0 106 33"
          fill="none"
        >
          <path
            d="M102.994 8.46666H105V33L1 33V11.4536L4.00877 18.9203L5.20413 21.9069H6.60551L9.40827 18.9203L11.3702 21.907L17.256 21.9072L20.339 18.9204L22.0207 14.4396L24.4683 16.6803L26.6747 18.9203L27.3638 22.3333L28.7651 21.9069H30.4858L33.6952 11.4536L34.6981 14.4403L36.3028 11.4536L37.5063 16.6803L40.7156 7.72028L42.5209 11.4536H45.9308L49.5413 3.98696L51.7477 7.72028L54.6535 5.48L58.194 11.4533L60.4704 1L62.1179 11.4533L73.1072 15.9333L74.5113 12.9466H75.9153L79.1247 8.46666H82.334L83.5375 12.9466L88.3515 3.98666L90.3574 15.9333L91.3603 11.4533H93.5667L95.5726 1L97.5784 9.95999L98.5813 5.48H101.189L102.994 8.46666Z"
            fill="url(#paint0_linear_2133_4739)"
            fill-opacity="0.16"
          />
          <path
            d="M105 8.4667H102.994L101.189 5.48004H98.5813L97.5784 9.96003L95.5726 1.00004L93.5667 11.4534H91.3603L90.3574 15.9333L88.3515 3.9867L83.5375 12.9467L82.334 8.4667H79.1247L75.9153 12.9467H74.5113L73.1072 15.9333L62.1179 11.4534L60.4704 1.00004L58.194 11.4534L54.6535 5.48004L51.7477 7.72032L49.5413 3.987L45.9308 11.4536H42.5209L40.7156 7.72032L37.5063 16.6803L36.3028 11.4536L34.6981 14.4403L33.6952 11.4536L30.4858 21.907H28.7651L27.3638 22.3334L26.6747 18.9203L24.4683 16.6803L22.0206 14.4396L20.339 18.9204L17.256 21.9073L11.3702 21.907L9.40827 18.9203L6.60551 21.907H5.20414L4.00877 18.9203L1 11.4536"
            stroke="#66C87B"
            stroke-linecap="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear_2133_4739"
              x1="53"
              y1="33"
              x2="53"
              y2="1"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#77B900" stop-opacity="0" />
              <stop offset="0.809892" stop-color="#77B900" />
            </linearGradient>
          </defs>
        </svg>
      ),
      svg3: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
        >
          <path
            d="M0.5 5.5L3.5 2.5L5.5 4.5L9.5 0.5"
            stroke="#34CAA5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6 0.5H9.5V4"
            stroke="#34CAA5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      name: "Total Income",
      data: 350,
      color: "#34CAA5",
      bg: "rgba(52, 202, 165, 0.12);",
    },
  ];
  
   const formatTooltipValue = (value:any) => { 
    //  return `${value}k`; 
     return (
       <div className="custom-tooltip relative flex items-center justify-center">
         <svg
           className="absolute "
           xmlns="http://www.w3.org/2000/svg"
           width="80"
           height="32"
           viewBox="0 0 80 32"
           fill="none"
         >
           <path
             fill-rule="evenodd"
             clip-rule="evenodd"
             d="M0 5C0 2.23858 2.23858 0 5 0H75C77.7614 0 80 2.23858 80 5V21C80 23.7614 77.7614 26 75 26L46 26L40 31.9771L34 26L5 26C2.23858 26 0 23.7614 0 21V5Z"
             fill="#090C2C"
           />
         </svg>
         <p className="text-white text-xs font-medium z-50 mb-1">{value}</p>
       </div>
     ); 
   }; 
  
   const formatYAxisLabel = (value:any) => { 
     return `${value}k`; 
   }; 
  
   const formatLegendValue = (value:any) => { 
     return value.charAt(0).toUpperCase() + value.slice(1); 
   }; 


  return (
    <div className="w-full p-5 xs:p-2 plus_jakarta_sans_semibold">
      <div className="tablet:block lg:block flex hero_container items-start gap-4 justify-between w-full flex-wrap  h-full">
        <div className="tablet:mb-1 mb-4  tablet:min-w-[150px] min-w-[400px] special flex-1 xs:p-0 xs:py-4 bg-white flex items-center justify-between flex-col gap-5 rounded-lg border w-full h-full border-primary_border box-border p-4 ">
          <div className="flex items-center flex-wrap justify-between w-full xs px-2">
            <p className="plus_jakarta_sans_semibold font-semibold text-sm text-[#26282C] xs:text-xs md:text-lg">
              Sales Trends
            </p>
            <div className="flex items-center justify-center gap-2">
              <p className="plus_jakarta_sans_semibold font-medium text-xs md:text-sm xs:text-xs whitespace-nowrap">
                Sort by:
              </p>
              <select className="rounded-full py-[6px] px-[12px] outline-none border border-primary_border text-xs">
                <option className="xs:text-xs plus_jakarta_sans_semibold font-normal text-xs">
                  Weekly
                </option>
                <option className="xs:text-xs plus_jakarta_sans_semibold font-normal text-xs">
                  Monthly
                </option>
                <option className="xs:text-xs plus_jakarta_sans_semibold font-normal text-xs">
                  Yearly
                </option>
              </select>
            </div>
          </div>
          {/* Charts */}
          <div className="overflow-y-scroll custom_scrollbar w-full">
            <ResponsiveContainer
              width="100%"
              height="100%"
              // hideAxis={[true,false]}
              // aspect={5 / 2}
              minWidth="400px"
              minHeight="300px"
              className="bg-back p-0"
            >
              <BarChart
                data={data}
                className="plus_jakarta_sans_semibold text-sm font-semibold text-[#525252]"
                // margin={right:25}}
              >
                <defs>
                  <linearGradient
                    id="BarChartsGradient"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#34CAA5" />
                    <stop offset="100%" stopColor="rgba(52, 202, 165, 0.00)" />
                  </linearGradient>
                </defs>
                <XAxis
                  dataKey="name"
                  tick={{
                    fill: "#525252",
                    // fontSize: 14,
                  }}
                  className="xs:text-xs xs:text-[8px]"
                  stroke=""
                />{" "}
                <YAxis
                  tickCount={6}
                  tick={{
                    fill: "#525252",
                  }}
                  stroke=""
                  className="xs:text-[10px] "
                />{" "}
                {/* <Tooltip content={<CustomTooltip />} /> */}
                <CartesianGrid y={-1000} stroke="#ccc" strokeDasharray="5 9" />
                <Tooltip
                  formatter={formatTooltipValue}
                  cursor={{ fill: "transparent" }}
                  content={CustomTooltip}
                />
                <Bar
                  isAnimationActive={false}
                  activeBar={false}
                  dataKey="uv"
                  fill="url(#BarChartsGradient)"
                  className="transition-all duration-700 bg-black absolute left-0"
                  // fill="linear-gradient(180deg, #34CAA5 0%, rgba(52, 202, 165, 0.00) 100%);
                  // "
                  // fill="red"
                  barSize={18}
                  radius={[30, 30, 0, 0]}
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      onMouseLeave={handleMouseLeave}
                      onMouseEnter={() => handleMouseEnter(index)}
                      className="transition-all duration-700"
                      fill={
                        hoveredBar === index
                          ? "url(#BarChartsGradient"
                          : "#34CAA51A"
                      }
                    />
                  ))}
                </Bar>
              </BarChart>
              {/* <LineChart width={600} height={300} data={data}>
            jhvjd
            <CartesianGrid strokeDasharray="" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="basis" dataKey="pv" stroke="red" />
            <Line type="basis" dataKey="uv" stroke="green" />
          </LineChart> */}
            </ResponsiveContainer>
          </div>
        </div>
        <div className="flex-1 md:min-w-[400px] items-center justify-center flex flex-wrap lg:h-full lg:justify-between gap-3  h-full ">
          {DashboardData.map((data, index) => (
            <div className="flex min-w-[200px] tablet:min-w-[180px] items-start justify-evenly flex-col bg-white rounded-lg border h-full lg:h-[48%] box-border border-primary_border py-3 px-2 w-full flex-1 lg:max-w-full HeroDashboard_Details gap-1 ">
              <div className="flex items-center justify-center w-full">
                <div className="flex items-center justify-center">
                  <div className="border flex items-center justify-center rounded-full border-primary_border w-10 h-10">
                    {data.svg}
                  </div>
                </div>
                <div className="flex items-center justify-end w-full">
                  <div className="flex items-center justify-center">
                    {data.svg2}
                  </div>
                </div>
              </div>
              <div>
                <p className="plus_jakarta_sans_semibold text-lg text-[#898989] xs:text-sm">
                  {data.name}
                </p>
              </div>
              <div>
                <p className="plus_jakarta_sans_semibold font-semibold text-2xl">
                  {data.data}
                </p>
              </div>
              <div className="flex items-center justify-start gap-[2px] w-full">
                <div
                  className="flex items-center justify-center rounded-full py-1 px-[6px] gap-[2px]"
                  style={{ color: data.color, background: data.bg }}
                >
                  {data.svg3}
                  <p className="plus_jakarta_sans_semibold text-xs font-medium xs:text-[10px]">
                    23.5%
                  </p>
                </div>
                <span className="text-xs xs:text-[10px]">vs.</span>
                <p className="text-xs text-[#606060] whitespace-nowrap xs:text-[10px]">
                  previous month
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
