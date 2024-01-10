import React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import { IconInterface } from './types';

const LerniMainIcon = ({
  color = "#001B23",
  size = 217
}: IconInterface) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 176 217" fill="none" >
      <Path
        d="M49.7877 184.072H54.5268V207.449H64.6023V211.033H49.7877V184.072ZM65.2335 201.595C65.2335 199.816 65.4725 198.25 65.9504 196.896C66.4548 195.542 67.1318 194.413 67.9814 193.511C68.8575 192.581 69.8797 191.891 71.0478 191.44C72.216 190.962 73.4771 190.723 74.8311 190.723C76.0259 190.723 77.0347 190.869 77.8578 191.161C78.7074 191.453 79.3976 191.851 79.9286 192.356C80.4596 192.86 80.8446 193.457 81.0835 194.148C81.349 194.838 81.4818 195.581 81.4818 196.378C81.4818 197.334 81.2163 198.25 80.6853 199.126C80.1543 199.975 79.3844 200.732 78.3755 201.396C77.3932 202.033 76.1984 202.551 74.7913 202.949C73.3842 203.321 71.8045 203.52 70.0522 203.546C70.1319 204.157 70.2514 204.741 70.4107 205.299C70.5965 205.83 70.8487 206.307 71.1673 206.732C71.5125 207.13 71.9505 207.449 72.4815 207.688C73.0125 207.927 73.6762 208.046 74.4727 208.046C75.0568 208.046 75.6807 207.98 76.3445 207.847C77.0082 207.715 77.6188 207.555 78.1764 207.369C78.8401 207.157 79.4906 206.918 80.1277 206.653L81.3225 209.48C80.6322 209.825 79.8888 210.131 79.0923 210.396C78.402 210.635 77.6056 210.847 76.7029 211.033C75.8002 211.219 74.8444 211.312 73.8355 211.312C72.2957 211.312 70.9815 211.086 69.8929 210.635C68.8044 210.157 67.915 209.493 67.2247 208.644C66.5344 207.794 66.03 206.772 65.7114 205.577C65.3928 204.383 65.2335 203.055 65.2335 201.595ZM74.4727 193.829C73.5966 193.829 72.8665 194.042 72.2824 194.466C71.7249 194.865 71.2735 195.396 70.9284 196.059C70.5832 196.697 70.331 197.427 70.1717 198.25C70.039 199.046 69.9593 199.856 69.9328 200.679C71.2071 200.626 72.2824 200.467 73.1585 200.201C74.0612 199.909 74.7913 199.564 75.3489 199.166C75.9064 198.741 76.3046 198.289 76.5436 197.812C76.8091 197.334 76.9418 196.856 76.9418 196.378C76.9418 195.608 76.7161 194.997 76.2648 194.546C75.8135 194.068 75.2161 193.829 74.4727 193.829ZM94.1321 195.343C93.6542 195.343 93.1764 195.462 92.6985 195.701C92.2206 195.94 91.7958 196.272 91.4241 196.697C91.0524 197.095 90.7471 197.586 90.5081 198.17C90.2692 198.754 90.1497 199.405 90.1497 200.121V211.033H85.6098V200.998C85.6098 199.405 85.5036 198.077 85.2912 197.015C85.0788 195.927 84.8531 195.05 84.6142 194.387C84.3221 193.617 84.0035 192.993 83.6584 192.515L87.2426 191.081C87.4815 191.373 87.7337 191.732 87.9992 192.157C88.2116 192.528 88.424 192.966 88.6364 193.471C88.8488 193.975 89.0214 194.573 89.1541 195.263C89.6851 193.723 90.455 192.621 91.4639 191.957C92.4728 191.267 93.6144 190.922 94.8888 190.922C95.4994 190.922 96.0702 191.002 96.6012 191.161C97.1322 191.294 97.3844 191.36 97.3579 191.36L96.0835 195.781C96.1101 195.781 95.9508 195.714 95.6056 195.581C95.287 195.422 94.7959 195.343 94.1321 195.343ZM112.298 211.033V198.17C112.298 197.055 112.098 196.166 111.7 195.502C111.302 194.812 110.625 194.466 109.669 194.466C109.059 194.466 108.461 194.626 107.877 194.944C107.32 195.236 106.815 195.674 106.364 196.258C105.912 196.843 105.541 197.559 105.249 198.409C104.983 199.232 104.85 200.161 104.85 201.197V211.033H100.31V200.998C100.31 199.405 100.204 198.077 99.9919 197.015C99.7795 195.927 99.5538 195.05 99.3149 194.387C99.0228 193.617 98.7042 192.993 98.3591 192.515L101.943 191.081C102.209 191.373 102.474 191.732 102.74 192.157C102.952 192.528 103.165 192.993 103.377 193.55C103.589 194.081 103.762 194.692 103.895 195.382C104.585 193.789 105.581 192.648 106.881 191.957C108.182 191.241 109.55 190.882 110.983 190.882C113.028 190.882 114.501 191.506 115.404 192.754C116.333 193.975 116.798 195.635 116.798 197.732V211.033H112.298ZM125.99 211.192C124.583 211.192 123.508 210.781 122.764 209.958C122.021 209.108 121.649 208.02 121.649 206.692V191.201H126.189V206.294C126.189 206.905 126.282 207.316 126.468 207.529C126.654 207.741 126.933 207.847 127.304 207.847C127.411 207.847 127.517 207.847 127.623 207.847C127.756 207.847 127.875 207.834 127.981 207.807C128.088 207.807 128.207 207.794 128.34 207.768L128.818 210.635C128.632 210.741 128.393 210.834 128.101 210.914C127.862 210.993 127.557 211.06 127.185 211.113C126.84 211.166 126.442 211.192 125.99 211.192ZM123.999 182.36C124.849 182.36 125.499 182.612 125.95 183.117C126.402 183.621 126.627 184.271 126.627 185.068C126.627 185.864 126.388 186.528 125.911 187.059C125.459 187.59 124.782 187.856 123.879 187.856C123.03 187.856 122.366 187.603 121.888 187.099C121.437 186.568 121.211 185.931 121.211 185.187C121.211 184.364 121.437 183.687 121.888 183.156C122.366 182.625 123.07 182.36 123.999 182.36Z"
        fill={color}
      />
      <Circle cx="57.4941" cy="34.1704" r="2.48901" transform="rotate(45 57.4941 34.1704)" fill={color} />
      <Circle cx="66.8789" cy="29.478" r="4.14834" transform="rotate(45 66.8789 29.478)" fill={color} />
      <Circle cx="80.9609" cy="27.1293" r="5.80768" transform="rotate(45 80.9609 27.1293)" fill={color} />
      <Circle cx="124.371" cy="70.5434" r="5.80768" transform="rotate(45 124.371 70.5434)" fill={color} />
      <Circle cx="122.025" cy="54.1166" r="7.46702" transform="rotate(45 122.025 54.1166)" fill={color} />
      <Circle cx="113.812" cy="37.6903" r="8.29669" transform="rotate(45 113.812 37.6903)" fill={color} />
      <Circle cx="97.3848" cy="29.476" r="7.46702" transform="rotate(45 97.3848 29.476)" fill={color} />
      <Circle cx="122.023" cy="84.6225" r="4.14834" transform="rotate(45 122.023 84.6225)" fill={color} />
      <Circle cx="117.334" cy="94.0102" r="2.48901" transform="rotate(45 117.334 94.0102)" fill={color} />
      <Circle cx="141.974" cy="57.6367" r="2.48901" transform="rotate(135 141.974 57.6367)" fill={color} />
      <Circle cx="146.667" cy="67.0244" r="4.14834" transform="rotate(135 146.667 67.0244)" fill={color} />
      <Circle cx="149.013" cy="81.1045" r="5.80768" transform="rotate(135 149.013 81.1045)" fill={color} />
      <Circle cx="105.601" cy="124.516" r="5.80768" transform="rotate(135 105.601 124.516)" fill={color} />
      <Circle cx="122.026" cy="122.17" r="7.46702" transform="rotate(135 122.026 122.17)" fill={color} />
      <Circle cx="138.452" cy="113.957" r="8.29669" transform="rotate(135 138.452 113.957)" fill={color} />
      <Circle cx="146.667" cy="97.5312" r="7.46702" transform="rotate(135 146.667 97.5312)" fill={color} />
      <Circle cx="91.5201" cy="122.17" r="4.14834" transform="rotate(135 91.5201 122.17)" fill={color} />
      <Circle cx="82.1343" cy="117.477" r="2.48901" transform="rotate(135 82.1343 117.477)" fill={color} />
      <Circle cx="118.506" cy="142.117" r="2.48901" transform="rotate(-135 118.506 142.117)" fill={color} />
      <Circle cx="109.119" cy="146.809" r="4.14834" transform="rotate(-135 109.119 146.809)" fill={color} />
      <Circle cx="95.0391" cy="149.158" r="5.80768" transform="rotate(-135 95.0391 149.158)" fill={color} />
      <Circle cx="51.627" cy="105.744" r="5.80768" transform="rotate(-135 51.627 105.744)" fill={color} />
      <Circle cx="53.9746" cy="122.17" r="7.46702" transform="rotate(-135 53.9746 122.17)" fill={color} />
      <Circle cx="62.1855" cy="138.597" r="8.29669" transform="rotate(-135 62.1855 138.597)" fill={color} />
      <Circle cx="78.6133" cy="146.811" r="7.46702" transform="rotate(-135 78.6133 146.811)" fill={color} />
      <Circle cx="53.9746" cy="91.6646" r="4.14834" transform="rotate(-135 53.9746 91.6646)" fill={color} />
      <Circle cx="58.666" cy="82.2769" r="2.48901" transform="rotate(-135 58.666 82.2769)" fill={color} />
      <Circle cx="34.0239" cy="118.65" r="2.48901" transform="rotate(-45 34.0239 118.65)" fill={color} />
      <Circle cx="29.3315" cy="109.263" r="4.14834" transform="rotate(-45 29.3315 109.263)" fill={color} />
      <Circle cx="26.9848" cy="95.1826" r="5.80768" transform="rotate(-45 26.9848 95.1826)" fill={color} />
      <Circle cx="70.3969" cy="51.7715" r="5.80768" transform="rotate(-45 70.3969 51.7715)" fill={color} />
      <Circle cx="53.9721" cy="54.1172" r="7.46702" transform="rotate(-45 53.9721 54.1172)" fill={color} />
      <Circle cx="37.5458" cy="62.3301" r="8.29669" transform="rotate(-45 37.5458 62.3301)" fill={color} />
      <Circle cx="29.3314" cy="78.7559" r="7.46702" transform="rotate(-45 29.3314 78.7559)" fill={color} />
      <Circle cx="84.478" cy="54.1172" r="4.14834" transform="rotate(-45 84.478 54.1172)" fill={color} />
      <Circle cx="93.8637" cy="58.8105" r="2.48901" transform="rotate(-45 93.8637 58.8105)" fill={color} />
    </Svg>
  )
}

export default LerniMainIcon