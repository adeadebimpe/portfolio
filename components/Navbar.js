import { useTheme } from "../contexts/ThemeContext";
import styles from "../styles/Navbar.module.css";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const { isDark } = useTheme();

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <svg
          width="20"
          height="15"
          viewBox="0 0 20 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_1106_7729)">
            <path
              d="M13.5219 10.9235H16.5224C16.8368 10.9235 17.1194 11.0974 17.2599 11.3777L18.6656 14.1785H15.6651C15.3505 14.1785 15.0681 14.0047 14.9276 13.7244L13.5219 10.9235ZM17.8835 10.7832C17.6729 10.363 17.2488 10.1021 16.7774 10.1021H12.1875L14.304 14.3188C14.5148 14.7391 14.9385 15 15.4101 15H20L17.8835 10.7832Z"
              fill={isDark ? "white" : "black"}
            />
            <path
              d="M11.9562 0.791964L13.7437 4.29886C13.8567 4.52016 13.8563 4.78445 13.743 5.00574L12.1962 8.02337L8.49969 0.791964H11.9562ZM14.5609 4.12279L12.459 0H7.1875L12.1954 9.79592L14.5596 5.18311C14.7297 4.85145 14.7301 4.45501 14.5609 4.12279Z"
              fill={isDark ? "white" : "black"}
            />
            <path
              d="M8.37801 6.64256C8.16517 6.24645 7.73717 6 7.26105 6H3L4.92874 9.58962H5.85965L4.34727 6.77472H7.00378C7.321 6.77472 7.6064 6.93902 7.74823 7.20316L9.15273 9.81711H7.63812H5.05098L5.46715 10.5918H10.5L8.37801 6.64256Z"
              fill={isDark ? "white" : "black"}
            />
            <path
              d="M7.08365 11.1829L7.5 10.4082H2.46728L0 15H4.26113C4.73724 15 5.16524 14.7538 5.37787 14.3575L6.96161 11.4106H6.03073L4.7483 13.7969C4.60647 14.0611 4.32108 14.2253 4.00387 14.2253H1.34723L2.9818 11.1829H7.08365Z"
              fill={isDark ? "white" : "black"}
            />
          </g>
          <defs>
            <clipPath id="clip0_1106_7729">
              <rect width="20" height="15" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <ThemeToggle />
    </nav>
  );
}
