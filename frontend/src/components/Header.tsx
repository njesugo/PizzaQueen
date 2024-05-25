"use client";

import Link from "next/link";
import { Button, Image } from "antd";
import { PlusOutlined } from "@ant-design/icons";

export const Header = () => {
    return (
        <nav className="flex justify-between items-center bg-[#454545] px-8 py-5 rounded-[15px]">
            <Link href={"/"}>
            <svg width="113" height="52" viewBox="0 0 113 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_7_36)">
                <path d="M47.7477 1.92254C46.8611 1.03064 45.7349 0.414983 44.5055 0.150149C43.2761 -0.114684 41.9963 -0.0173266 40.8211 0.430427L6.94121 13.7684C4.47506 14.7469 2.44719 16.5862 1.23333 18.9454C0.0194697 21.3046 -0.298091 24.0239 0.339488 26.5993C1.82859 32.0346 4.70704 36.9886 8.69164 40.974C12.6762 44.9593 17.6297 47.8386 23.0647 49.3287C25.6441 49.9655 28.367 49.6454 30.7283 48.4276C33.0896 47.2098 34.9292 45.1771 35.906 42.7063L49.2688 8.7664C49.6998 7.6001 49.7855 6.33431 49.5157 5.12056C49.246 3.9068 48.6322 2.79649 47.7477 1.92254ZM40.0657 15.1984C39.2986 14.8109 38.4591 14.5877 37.6008 14.543C36.7426 14.4984 35.8844 14.6334 35.0813 14.9393C34.2781 15.2452 33.5476 15.7153 32.9365 16.3196C32.3254 16.9239 31.8471 17.6491 31.5322 18.4488C31.2173 19.2484 31.0727 20.105 31.1077 20.9638C31.1427 21.8225 31.3565 22.6645 31.7355 23.4358C32.1144 24.2072 32.6501 24.8911 33.3084 25.4436C33.9666 25.9962 34.733 26.4053 35.5583 26.6449L30.1362 40.4154C29.9978 40.7506 29.8222 41.0692 29.6127 41.3653C19.1078 41.1045 8.55957 30.5562 8.29674 20.0494C8.5873 19.8445 8.89963 19.6724 9.22802 19.5361L43.0189 6.23746C43.0754 6.20897 43.14 6.20082 43.2019 6.21439C43.2637 6.22796 43.3189 6.26242 43.3583 6.31196C43.3969 6.34258 43.4267 6.38278 43.4449 6.42853C43.463 6.47429 43.4689 6.52401 43.4618 6.57272L40.0657 15.1984ZM24.8342 24.8341C24.8342 25.9318 24.3981 26.9846 23.6219 27.7608C22.8457 28.537 21.7929 28.9731 20.6952 28.9731C19.5974 28.9731 18.5446 28.537 17.7684 27.7608C16.9922 26.9846 16.5561 25.9318 16.5561 24.8341C16.5561 23.7363 16.9922 22.6835 17.7684 21.9073C18.5446 21.1311 19.5974 20.695 20.6952 20.695C21.7929 20.695 22.8457 21.1311 23.6219 21.9073C24.3981 22.6835 24.8342 23.7363 24.8342 24.8341Z" fill="white"/>
                </g>
                <path d="M72.251 33.5845C71.8028 31.7914 71.4607 29.9866 71.2248 28.17C70.9888 26.3298 70.7765 23.31 70.5878 19.1105C70.5878 18.8274 70.6821 18.5797 70.8709 18.3674C71.0832 18.155 71.3191 18.0489 71.5786 18.0489H71.8971C72.0151 18.8274 72.0977 20.0778 72.1449 21.8001C72.1449 21.9888 72.1684 22.6258 72.2156 23.711C72.2628 24.7727 72.3808 25.7754 72.5695 26.7191C75.3062 26.4596 77.4885 25.9287 79.1164 25.1266C80.7679 24.3244 81.5936 23.1802 81.5936 21.6939C81.5936 19.8301 80.7679 18.3084 79.1164 17.1288C77.4649 15.9492 74.9759 15.3593 71.6494 15.3593C70.2575 15.3593 69.0778 15.6189 68.1106 16.1379C67.9454 16.2087 67.8275 16.362 67.7567 16.5979C67.6859 16.8103 67.6269 17.117 67.5797 17.518C67.5325 17.9427 67.4736 18.2612 67.4028 18.4735C67.332 18.6859 67.2023 18.792 67.0135 18.792C66.8012 18.792 66.6596 18.6387 66.5889 18.332C66.5417 18.0017 66.5181 17.2585 66.5181 16.1025C66.5181 15.4419 66.9663 14.9229 67.8628 14.5454C68.7593 14.1679 69.9154 13.9792 71.3309 13.9792C75.4596 13.9792 78.5266 14.628 80.5319 15.9256C82.5373 17.2231 83.54 19.2167 83.54 21.9062C83.54 23.3454 82.962 24.5486 81.8059 25.5159C80.6499 26.4832 79.2462 27.2027 77.5947 27.6746C75.9432 28.1228 74.3625 28.3469 72.8526 28.3469C72.8998 28.6301 72.947 28.8896 72.9942 29.1255C73.0414 29.3614 73.0768 29.562 73.1003 29.7271C73.4306 31.3314 73.5958 32.57 73.5958 33.4429C73.5958 33.9619 73.525 34.3748 73.3835 34.6815C73.2655 34.9882 72.9942 35.0944 72.5695 35L72.251 33.5845ZM112.614 38.2911C112.236 38.645 111.823 38.822 111.375 38.822C110.714 38.822 109.948 38.4917 109.075 37.8311C108.202 37.1705 106.857 36.0027 105.04 34.3276C104.781 34.3748 104.415 34.4338 103.943 34.5046C103.495 34.5753 103.035 34.6461 102.563 34.7169L100.935 34.9646C100.747 34.9882 100.464 35 100.086 35C98.293 35 96.6534 34.5635 95.1671 33.6906C93.6807 32.7941 92.5011 31.6027 91.6282 30.1164C90.7553 28.6301 90.3188 27.0376 90.3188 25.3389C90.3188 23.711 90.6373 22.2365 91.2743 20.9153C91.9113 19.5942 92.7606 18.5679 93.8223 17.8365C94.9075 17.0816 96.0754 16.7041 97.3258 16.7041C99.7322 16.7041 102.009 17.2939 104.156 18.4735C106.303 19.6296 108.025 21.1159 109.322 22.9325C110.62 24.7255 111.269 26.5185 111.269 28.3116C111.269 29.326 110.868 30.2697 110.066 31.1426C109.287 32.0156 108.249 32.8059 106.951 33.5137C107.895 34.3158 108.91 35.0826 109.995 35.8139C110.797 36.333 111.399 36.7694 111.8 37.1233C112.201 37.4772 112.472 37.8665 112.614 38.2911ZM99.8383 32.6997C100.381 32.6997 100.888 32.6762 101.36 32.629C101.832 32.5818 102.398 32.4992 103.059 32.3812C102.044 31.2724 101.277 30.3523 100.758 29.6209C100.263 28.866 100.015 28.2408 100.015 27.7453C100.015 27.3443 100.192 27.0258 100.546 26.7899C100.947 26.7899 101.372 27.0494 101.82 27.5684C102.292 28.0874 102.882 28.866 103.59 29.904C104.203 30.8713 104.675 31.5201 105.005 31.8504C106.373 31.4965 107.47 31.0011 108.296 30.3641C109.146 29.7271 109.57 28.9721 109.57 28.0992C109.57 26.6601 109.075 25.2092 108.084 23.7464C107.093 22.2837 105.689 21.0687 103.873 20.1014C102.08 19.1105 100.039 18.6151 97.7504 18.6151C96.0518 18.6151 94.7188 19.2521 93.7515 20.5261C92.7842 21.7765 92.3006 23.3808 92.3006 25.3389C92.2062 26.7309 92.4893 27.9931 93.1499 29.1255C93.8341 30.2343 94.766 31.1073 95.9456 31.7443C97.1488 32.3812 98.4464 32.6997 99.8383 32.6997Z" fill="white"/>
                <defs>
                <clipPath id="clip0_7_36">
                <rect width="49.6682" height="49.6682" fill="white"/>
                </clipPath>
                </defs>
            </svg>
            </Link>
            <Button 
                type="primary"
                icon={<PlusOutlined />}
                className="custom-header-button"
            ></Button>
        </nav>
    );
}