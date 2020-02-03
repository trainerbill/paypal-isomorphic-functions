import btoa from "btoa";

export const CONFIG = new Map();

// Server Config
if (process) {
  CONFIG.set("PAYPAL_CLIENT_ID", process.env.PAYPAL_CLIENT_ID);
  CONFIG.set("PAYPAL_CLIENT_SECRET", process.env.PAYPAL_CLIENT_SECRET);
  CONFIG.set("PAYPAL_ENVIRONMENT", process.env.PAYPAL_ENVIRONMENT);
  CONFIG.set(
    "PAYPAL_REST_BEARER",
    btoa(`${process.env.PAYPAL_CLIENT_ID}:${process.env.PAYPAL_CLIENT_SECRET}`)
  );
} else {
  CONFIG.set(
    "PAYPAL_CLIENT_ID",
    window.localStorage.getItem("PAYPAL_CLIENT_ID")
  );
  CONFIG.set(
    "PAYPAL_CLIENT_SECRET",
    window.localStorage.getItem("PAYPAL_CLIENT_SECRET")
  );
  CONFIG.set(
    "PAYPAL_ENVIRONMENT",
    window.localStorage.getItem("PAYPAL_ENVIRONMENT")
  );
  CONFIG.set(
    "PAYPAL_REST_BEARER",
    window.btoa(
      `${window.localStorage.getItem(
        "PAYPAL_CLIENT_ID"
      )}:${window.localStorage.getItem("PAYPAL_CLIENT_SECRET")}`
    )
  );
}

CONFIG.set(
  "PAYPAL_REST_HOSTNAME",
  CONFIG.get("PAYPAL_ENVIRONMENT") === "productin"
    ? "https://api.paypal.com"
    : "https://api.sandbox.paypal.com"
);
