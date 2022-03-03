// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import styles from "@fortawesome/fontawesome-svg-core/styles.css";
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;

// use this to prevent unnecessary css tree shaking
// eslint-disable-next-line no-console
console.log({ styles });
