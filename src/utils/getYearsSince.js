export const getYearsSince = (date) => {
    const today = new Date();
    const sinceDate = new Date(date);
    const m = today.getMonth() - sinceDate.getMonth();
    let years = today.getFullYear() - sinceDate.getFullYear();
    if (m < 0 || (m === 0 && today.getDate() < sinceDate.getDate())) {
      years--;
    }
    return years;
  };