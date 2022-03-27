export const classnames = (...classnames: string[]) => {
  return classnames.join(" ");
};

export const timeFromToday = (dateTime: Date) => {
  const today = new Date();
  const time = new Date(dateTime);
  const diff = Math.floor((today.getTime() - time.getTime()) / 1000 / 60);

  if (diff < 1) return "방금 전";

  if (diff < 60) return `${diff}분 전`;

  const diffHours = Math.floor(diff / 60);

  if (diffHours < 24) {
    return `${diffHours}시간 전`;
  }

  const diffDays = Math.floor(diffHours / 60 / 24);

  if (diffDays < 365) {
    return `${diffDays}일 전`;
  }
  return `${Math.floor(diffDays / 365)}년 전`;
};
