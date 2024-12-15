export default function WelcomeBanner({
  title = 'Bienvenid@, User Name 👋',
  description = 'Estas son algunas actualizaciones:',
}: {
  title?: string;
  description?: string;
}) {
  return (
    <div className='relative bg-app-light-blue-900 rounded-2xl dark:bg-indigo-500 p-4 sm:p-6 overflow-hidden mb-8'>
      {/* Background illustration */}
      <div
        className='absolute right-0 top-0 -mt-4 mr-16 pointer-events-none hidden xl:block'
        aria-hidden='true'
      >
        <svg
          width='241'
          height='145'
          viewBox='0 0 241 116'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M138.377 88.018C138.371 87.9508 138.375 87.8842 138.369 87.817C138.192 82.0034 139.682 76.1704 140.677 70.4681C141.889 63.5079 142.949 56.5108 143.918 49.5899C143.832 48.1915 143.601 46.3032 142.379 45.4589C141.757 45.0289 140.995 45.0115 140.283 45.1924C139.169 45.4804 138.341 46.2422 137.673 47.1892C136.898 48.2831 136.285 49.4956 135.714 50.7151C135.009 52.2139 131.568 61.5828 130.718 64.8253C129.913 67.8985 127.585 74.5929 126.357 67.9824C125.521 63.479 125.008 46.6022 124.694 42.6236C124.489 40.0398 124.458 36.8926 122.417 35.0683C121.643 34.3725 120.692 33.8626 119.649 34.0734C118.759 34.259 118.086 34.9384 117.605 35.7094C116.623 37.2885 116.241 39.2916 115.963 41.1236C115.406 44.7973 116.137 59.0464 115.982 62.4507C115.865 64.9932 114.454 71.0691 112.682 65.6606C110.16 57.9632 109.575 49.9843 107.713 42.1462C106.943 38.9159 105.915 35.4379 103.71 32.9413C102.185 31.2118 99.0578 29.4671 97.2759 31.7999C96.5635 32.7254 96.3013 33.9617 96.1756 35.1147C96.0251 36.4908 96.0467 37.8952 96.1378 39.2796C96.7855 49.2236 99.3941 59.1165 101.312 68.8621C101.994 72.3214 100.034 73.9048 98.1578 70.6002C93.9053 63.1097 92.5343 54.3101 87.523 47.1173C86.27 45.3215 84.0837 43.0168 81.7773 44.2377C80.1366 45.1033 79.5701 46.9531 79.59 48.7584C79.6086 50.683 80.1108 52.6147 80.5108 54.4883C81.0546 57.0523 81.8341 59.5575 82.6697 62.0371C83.7641 65.2801 84.8163 68.5447 85.9807 71.7581C87.1926 75.1173 88.7218 78.7037 89.1413 82.3014C89.2825 83.5024 89.476 85.3075 89.5732 87.3032C88.971 87.4805 88.3533 87.5091 87.726 87.3653C84.9739 86.71 82.6412 84.7792 80.0633 83.6513C76.9801 82.3099 73.2138 80.5686 69.8544 80.2861C68.1862 80.1431 66.3881 80.5944 65.2475 81.869C63.1742 84.186 64.0264 87.7118 65.7377 89.9287C66.0337 90.3123 66.3579 90.6783 66.6873 91.0303C71.6594 93.5863 76.3571 97.0726 80.8792 100.325C84.3787 102.844 86.6202 107.347 89.5346 110.527C96.8361 118.484 110.749 120.527 120.596 117.653C125.117 116.333 129.261 113.68 132.427 110.052C137.9 103.786 138.669 96.1098 138.381 88.0325L138.377 88.018Z'
            fill='#75D6E5'
          />
          <path
            d='M212.346 39.4188C212.365 39.3741 212.389 39.333 212.408 39.2883C214.257 35.5337 217.171 32.3818 219.727 29.1303C222.845 25.1609 225.878 21.1115 228.828 17.077C229.246 16.158 229.736 14.8747 229.246 13.8879C228.996 13.3855 228.518 13.0935 228.006 12.9456C227.201 12.7173 226.419 12.8954 225.676 13.25C224.814 13.6581 224.017 14.2015 223.242 14.7645C222.29 15.4557 216.945 20.1316 215.311 21.8756C213.763 23.5287 210.027 26.9184 211.478 22.2702C212.468 19.1042 217.836 8.205 218.98 5.56443C219.721 3.84916 220.764 1.84061 220.084 -0.0700836C219.828 -0.797003 219.396 -1.47159 218.664 -1.7223C218.036 -1.93294 217.38 -1.74997 216.814 -1.43817C215.658 -0.798447 214.74 0.331565 213.945 1.39159C212.352 3.51752 208.008 12.8293 206.761 14.9324C205.829 16.5026 202.883 19.8379 203.584 15.7519C204.581 9.93722 206.902 4.65794 208.365 -1.00274C208.966 -3.33699 209.487 -5.92333 208.931 -8.32076C208.546 -9.98105 207.151 -12.2419 205.233 -11.4189C204.469 -11.0944 203.885 -10.4066 203.416 -9.72123C202.856 -8.90353 202.396 -8.00432 201.987 -7.09224C199.042 -0.542966 197.36 6.69724 195.288 13.589C194.554 16.0358 192.776 16.3178 192.7 13.5285C192.529 7.20637 194.628 1.11655 193.875 -5.29663C193.686 -6.89845 193.076 -9.16752 191.201 -9.24367C189.868 -9.29962 188.884 -8.33475 188.287 -7.18176C187.65 -5.95361 187.317 -4.54254 186.938 -3.20598C186.418 -1.3783 186.068 0.49903 185.761 2.38079C185.361 4.84249 184.928 7.30232 184.582 9.77103C184.218 12.3498 183.978 15.1898 183.03 17.6276C182.715 18.4418 182.228 19.6587 181.617 20.961C181.175 20.8514 180.773 20.6416 180.423 20.3189C178.898 18.8878 178.069 16.8021 176.814 15.1353C175.31 13.1466 173.508 10.6522 171.471 9.2336C170.461 8.52743 169.167 8.1505 168.014 8.53857C165.916 9.24403 165.267 11.7958 165.605 13.8339C165.663 14.1865 165.746 14.5384 165.836 14.8833C168.129 18.3396 169.933 22.2849 171.706 26.0171C173.076 28.9067 172.979 32.5913 173.756 35.6841C175.704 43.4268 183.844 49.8562 191.062 51.6654C194.377 52.4954 197.902 52.3404 201.135 51.2062C206.722 49.2492 209.801 44.6616 212.343 39.4295L212.346 39.4188Z'
            fill='#75D6E5'
          />
          <path
            d='M72.5311 16.6543C72.5275 16.6195 72.5286 16.585 72.5249 16.5503C72.377 13.5415 73.0923 10.5052 73.5525 7.54169C74.1132 3.92453 74.5942 0.289859 75.029 -3.30438C74.9711 -4.02764 74.8335 -5.00307 74.1922 -5.4274C73.8658 -5.64346 73.4713 -5.64446 73.1044 -5.54324C72.5301 -5.38234 72.1089 -4.97912 71.7722 -4.48164C71.3812 -3.90696 71.0757 -3.27258 70.7914 -2.635C70.4411 -1.85144 68.7496 3.03667 68.3407 4.7248C67.9533 6.32473 66.813 9.81607 66.1129 6.40576C65.6367 4.0825 65.2075 -4.65178 65.0066 -6.70883C64.8755 -8.0447 64.829 -9.67412 63.7543 -10.5973C63.347 -10.9495 62.8493 -11.2034 62.3117 -11.0833C61.8525 -10.9778 61.5107 -10.6188 61.269 -10.2145C60.7756 -9.38633 60.5969 -8.34501 60.4706 -7.39332C60.2179 -5.485 60.734 1.8862 60.6865 3.65078C60.6505 4.96864 59.9786 8.13 59.0087 5.34787C57.6287 1.38843 57.2484 -2.7373 56.2086 -6.77664C55.7782 -8.44128 55.2123 -10.2315 54.0467 -11.5011C53.24 -12.3806 51.6037 -13.2511 50.7035 -12.0242C50.3435 -11.5374 50.2197 -10.8944 50.1657 -10.296C50.1011 -9.58182 50.1259 -8.85475 50.1864 -8.13882C50.6179 -2.99611 52.0644 2.0994 53.1516 7.12595C53.5382 8.91015 52.5388 9.7508 51.5351 8.05936C49.2606 4.22528 48.4656 -0.317113 45.801 -3.989C45.1348 -4.90574 43.9803 -6.07613 42.7977 -5.41953C41.9564 -4.95394 41.6809 -3.99001 41.7087 -3.05533C41.7369 -2.05889 42.0156 -1.06386 42.2409 -0.097814C42.5473 1.22422 42.9752 2.51331 43.4318 3.78855C44.0299 5.45639 44.6064 7.13585 45.2404 8.78762C45.9004 10.5144 46.727 12.3554 46.979 14.2141C47.0638 14.8345 47.1814 15.7673 47.251 16.7997C46.9409 16.8979 46.6213 16.9192 46.295 16.8514C44.8635 16.5411 43.6369 15.5659 42.291 15.0091C40.6814 14.347 38.7142 13.4851 36.9717 13.3743C36.1065 13.3178 35.1797 13.5705 34.6014 14.2426C33.5501 15.4644 34.0254 17.2813 34.9331 18.4112C35.09 18.6067 35.2615 18.7928 35.4355 18.9716C38.035 20.2428 40.5014 21.9985 42.8746 23.635C44.7112 24.9025 45.9155 27.2109 47.4554 28.8266C51.3134 32.8698 58.5379 33.7811 63.6097 32.1889C65.938 31.4574 68.0585 30.0396 69.6626 28.1276C72.4367 24.8249 72.7607 20.8416 72.5333 16.6617L72.5311 16.6543Z'
            fill='#75D6E5'
          />
          <g clipPath='url(#clip0_293_430)'>
            <path
              d='M177.917 1.62576C177.868 1.58134 177.826 1.53092 177.777 1.4865C173.768 -2.5869 171.004 -7.83628 167.954 -12.6464C164.23 -18.5162 160.365 -24.3057 156.483 -29.9772C155.486 -30.9269 154.053 -32.1294 152.568 -31.8868C151.811 -31.7634 151.225 -31.2453 150.808 -30.6184C150.159 -29.6337 150.042 -28.507 150.169 -27.3579C150.313 -26.0277 150.659 -24.7254 151.04 -23.4465C151.508 -21.8736 155.156 -12.7116 156.675 -9.77827C158.116 -6.99851 160.822 -0.543812 155.488 -4.45959C151.856 -7.12816 140.218 -18.9534 137.328 -21.6068C135.451 -23.3292 133.33 -25.5795 130.573 -25.4736C129.525 -25.4369 128.467 -25.1417 127.821 -24.2631C127.273 -23.5087 127.218 -22.5492 127.369 -21.6573C127.68 -19.8328 128.727 -18.1203 129.738 -16.6039C131.767 -13.5638 141.817 -3.7869 143.969 -1.22113C145.576 0.695849 148.561 6.06538 143.618 3.39614C136.584 -0.403167 130.823 -5.75502 124.193 -10.1158C121.458 -11.9104 118.363 -13.7047 115.035 -13.9706C112.731 -14.1557 109.207 -13.2357 109.418 -10.3096C109.497 -9.1449 110.123 -8.06964 110.797 -7.14966C111.6 -6.05144 112.553 -5.05263 113.545 -4.11675C120.662 2.61031 129.226 7.93372 137.17 13.6325C139.991 15.6544 139.567 18.1631 135.948 17.0855C127.745 14.6422 120.844 9.24545 112.267 7.54596C110.124 7.12288 106.937 6.98304 106.01 9.47204C105.349 11.2405 106.154 12.9708 107.373 14.2601C108.67 15.6364 110.336 16.6809 111.887 17.7547C114.007 19.2266 116.265 20.4917 118.549 21.6993C121.537 23.2776 124.507 24.9009 127.528 26.4091C130.682 27.9893 134.227 29.5124 136.942 31.8173C137.849 32.5858 139.199 33.7541 140.603 35.1269C140.266 35.6747 139.819 36.1258 139.25 36.4593C136.735 37.9045 133.688 38.1366 130.99 39.1193C127.768 40.2999 123.765 41.6681 121.041 43.8057C119.686 44.8652 118.63 46.4444 118.618 48.1595C118.598 51.2773 121.592 53.2286 124.361 53.6361C124.84 53.7067 125.329 53.745 125.812 53.7694C131.269 52.149 137.139 51.3913 142.721 50.5872C147.041 49.9665 151.735 51.655 156.055 51.9189C166.87 52.5735 178.734 44.3514 184.251 35.413C186.784 31.3088 188.143 26.5048 188.114 21.6797C188.069 13.341 183.532 7.26353 177.93 1.63357L177.917 1.62576Z'
              fill='white'
            />
          </g>
          <g clipPath='url(#clip1_293_430)'>
            <path
              d='M67.7601 122.485C67.8308 122.449 67.9051 122.423 67.9758 122.387C74.2467 119.618 81.3082 118.745 87.9985 117.365C96.1638 115.678 104.299 113.8 112.308 111.852C113.797 111.136 115.754 110.039 116.112 108.27C116.295 107.369 115.962 106.491 115.436 105.758C114.607 104.612 113.392 104.002 112.049 103.657C110.496 103.254 108.888 103.09 107.292 102.975C105.329 102.832 93.5032 103.036 89.5676 103.496C85.8379 103.932 77.4487 104.228 84.105 99.9066C88.6402 96.964 106.845 88.927 111.047 86.8121C113.776 85.4372 117.201 84.0126 118.252 80.875C118.655 79.6841 118.773 78.3718 118.062 77.2742C117.448 76.339 116.395 75.8702 115.331 75.6609C113.152 75.2358 110.786 75.6831 108.656 76.1741C104.385 77.1598 89.1522 84.285 85.3606 85.6104C82.5283 86.599 75.2379 87.6693 80.33 83.257C87.5772 76.9784 96.0256 72.7873 103.731 67.2003C106.905 64.8935 110.231 62.1837 111.942 58.5632C113.127 56.0567 113.591 51.7136 110.219 50.7075C108.879 50.3021 107.407 50.5482 106.089 50.9136C104.516 51.3492 102.991 51.9938 101.521 52.709C90.9535 57.8388 81.3475 65.1864 71.5834 71.6793C68.1182 73.9856 65.4836 72.4459 68.2284 68.8432C74.4506 60.6778 83.4331 55.2269 88.9797 46.326C90.3637 44.1017 91.8729 40.5863 89.4743 38.49C87.7711 36.9975 85.4883 37.1668 83.5248 37.9866C81.4304 38.8574 79.5514 40.2839 77.6887 41.568C75.138 43.3212 72.7603 45.3177 70.4365 47.367C67.398 50.049 64.3164 52.6924 61.3425 55.4412C58.2313 58.3088 55.0183 61.6392 51.2805 63.7067C50.0334 64.3982 48.1502 65.4161 46.0144 66.4082C45.5427 65.7984 45.2264 65.1053 45.094 64.325C44.5397 60.8913 45.5728 57.3738 45.6153 53.9305C45.658 49.8156 45.8223 44.7437 44.5803 40.7807C43.9666 38.8115 42.6434 36.9563 40.7242 36.2158C37.2354 34.8698 33.7761 37.3998 32.1436 40.3338C31.8611 40.8412 31.6107 41.3732 31.3782 41.905C30.8801 48.7142 29.239 55.6206 27.7724 62.2231C26.635 67.3335 22.7489 71.8825 20.6198 76.6159C15.2956 88.4706 19.4844 105.269 27.1698 115.251C30.6992 119.834 35.5114 123.398 40.9364 125.413C50.3099 128.901 59.0529 126.391 67.746 122.496L67.7601 122.485Z'
              fill='white'
            />
          </g>
          <path
            d='M209.013 115.001C209.053 114.949 209.099 114.904 209.138 114.853C212.803 110.606 217.663 107.534 222.086 104.202C227.484 100.134 232.797 95.9304 237.996 91.7161C238.847 90.6638 239.915 89.1613 239.599 87.6914C239.438 86.9431 238.91 86.3879 238.287 86.0086C237.31 85.4183 236.226 85.3682 235.136 85.5634C233.873 85.7858 232.648 86.2085 231.448 86.6652C229.971 87.2253 221.424 91.4122 218.707 93.1041C216.133 94.708 210.118 97.7937 213.558 92.2329C215.902 88.4456 226.542 76.1186 228.914 73.0751C230.453 71.0978 232.483 68.8452 232.226 66.0972C232.131 65.0527 231.789 64.013 230.913 63.4195C230.162 62.9164 229.242 62.9184 228.398 63.1219C226.672 63.5408 225.095 64.6878 223.704 65.788C220.914 67.9949 212.141 78.6144 209.811 80.9164C208.071 82.6349 203.109 85.9353 205.38 80.8389C208.612 73.5864 213.399 67.5142 217.191 60.6322C218.75 57.7933 220.29 54.5956 220.355 51.255C220.402 48.9418 219.323 45.4761 216.539 45.8591C215.431 46.0072 214.439 46.6965 213.598 47.4241C212.594 48.292 211.694 49.3028 210.856 50.3488C204.831 57.8581 200.23 66.7289 195.234 75.0027C193.462 77.9405 191.041 77.666 191.866 73.9863C193.736 65.6462 198.502 58.4325 199.64 49.7625C199.923 47.5966 199.876 44.4047 197.445 43.6257C195.718 43.0696 194.111 43.9768 192.948 45.2705C191.706 46.6477 190.802 48.3747 189.864 49.9877C188.578 52.1926 187.497 54.5237 186.472 56.8767C185.134 59.9552 183.751 63.019 182.481 66.1264C181.149 69.371 179.895 73.0029 177.846 75.8517C177.163 76.8035 176.123 78.2208 174.891 79.7045C174.349 79.4008 173.892 78.9808 173.541 78.4316C172.018 76.0054 171.624 72.9742 170.532 70.3371C169.222 67.1885 167.688 63.2696 165.491 60.6746C164.402 59.3841 162.834 58.4222 161.194 58.5124C158.214 58.6766 156.519 61.7828 156.287 64.5739C156.246 65.0567 156.237 65.5472 156.241 66.0316C158.099 71.3875 159.155 77.207 160.239 82.7356C161.077 87.0156 159.729 91.8051 159.722 96.1359C159.708 106.98 168.236 118.346 177.089 123.329C181.154 125.616 185.821 126.69 190.429 126.375C198.394 125.836 203.944 120.944 209.006 115.014L209.013 115.001Z'
            fill='white'
          />
          <defs>
            <clipPath id='clip0_293_430'>
              <rect
                width='87.8379'
                height='83.1218'
                fill='white'
                transform='translate(192.811 -28.2752) rotate(95.2504)'
              />
            </clipPath>
            <clipPath id='clip1_293_430'>
              <rect
                width='105.351'
                height='99.6946'
                fill='white'
                transform='translate(94.9824 151.882) rotate(-154.028)'
              />
            </clipPath>
          </defs>
        </svg>
      </div>

      {/* Content */}
      <div className='relative'>
        <h1 className='text-2xl md:text-3xl text-white dark:text-slate-100 font-bold mb-1'>
          {title}
        </h1>
        <p className='text-app-light-blue-200 dark:text-indigo-200'>
          {description}
        </p>
      </div>
    </div>
  );
}
