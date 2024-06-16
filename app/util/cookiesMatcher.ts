export const getCookieValue = () => {
  const match = document.cookie.match(
    new RegExp("(^| )" + "userId" + "=([^;]+)")
  );
  if (match) return match[2];
  return null;
};
