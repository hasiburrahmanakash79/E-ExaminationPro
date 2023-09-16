export const getColor = percentage => {
    if (percentage >= 90) {
      return '#4CAF50'
    } else if (percentage >= 60) {
      return '#FFC107'
    } else {
      return '#F44336'
    }
  }