function calculateSalary() {
  const hourlyRate = parseFloat(document.getElementById("hourlyRate").value);
  const hoursWorked = parseFloat(document.getElementById("hoursWorked").value);
  const bonus = parseFloat(document.getElementById("bonus").value);
  
  if (isNaN(hourlyRate) || isNaN(hoursWorked) || hourlyRate < 0 || hoursWorked < 0 || isNaN(bonus) || bonus < 0) {
      document.getElementById("result").innerText = "Silakan masukkan nilai yang valid!";
      return;
  }

  const salary = (hourlyRate * hoursWorked) + bonus;
  document.getElementById("result").innerText = `Gaji Karyawan: Rp ${salary.toFixed(2)}`;
}
