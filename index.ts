function calculateAgeDetailed(birthDate: Date): { years: number; months: number; days: number } {
    const today = new Date();

    if (birthDate > today) {
      throw new Error("Invalid birth date. Cannot be in the future.");
    }

    const timeElapsed = today.getTime() - birthDate.getTime();
  
    const years = Math.floor(timeElapsed / (1000 * 60 * 60 * 24 * 365));

    const remainingMilliseconds = timeElapsed % (1000 * 60 * 60 * 24 * 365);
  
    const months = Math.floor(remainingMilliseconds / (1000 * 60 * 60 * 24 * 30));
  
    const remainingDaysMilliseconds = remainingMilliseconds % (1000 * 60 * 60 * 24 * 30);

    const days = Math.floor(remainingDaysMilliseconds / (1000 * 60 * 60 * 24));

    return { years, months, days };
  }

  

  const birthDate0 = new Date(2007, 1, 11); // Year, Month (0-indexed), Day
const age0 = calculateAgeDetailed(birthDate0);
console.log("Age:", age0); // { years: 33, months: 6, days: 2 }
