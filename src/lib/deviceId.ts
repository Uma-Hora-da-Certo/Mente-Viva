function generateRandomId() {
  return (
    crypto.randomUUID?.() ||
    Math.random().toString(36).substring(2) + Date.now()
  );
}

export function getDeviceId(): string {
  if (typeof window === "undefined") return "server";

  let id = localStorage.getItem("deviceId");
  if (!id) {
    id = generateRandomId();
    localStorage.setItem("deviceId", id);
  }
  return id;
}

export function getDefaultUsername(): string {
  if (typeof window === "undefined") return "Guest";
  let username = localStorage.getItem("username");

  if (!username) {
    username = `Guest-${Math.floor(Math.random() * 9999)}`;
    localStorage.setItem("username", username);
  }

  return username;
}
