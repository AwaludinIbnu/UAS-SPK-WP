function calculateWP() {
    // dapatkan nilai masukan
    const productivityInputs = document.getElementsByClassName('productivity');
    const attendanceInputs = document.getElementsByClassName('attendance');
    const communicationInputs = document.getElementsByClassName('communication');
  
    const weightProductivity = parseFloat(document.getElementById('weightProductivity').value) || 0;
    const weightAttendance = parseFloat(document.getElementById('weightAttendance').value) || 0;
    const weightCommunication = parseFloat(document.getElementById('weightCommunication').value) || 0;
  
    const resultContainer = document.getElementById('result');
    resultContainer.innerHTML = '';
  
    const employees = [];
  
    // Ulangi
    for (let i = 0; i < productivityInputs.length; i++) {
      const productivity = parseFloat(productivityInputs[i].value) || 0;
      const attendance = parseFloat(attendanceInputs[i].value) || 0;
      const communication = parseFloat(communicationInputs[i].value) || 0;
  
      // Hitung Weighted Product (WP)
      const wp = (productivity * weightProductivity) + (attendance * weightAttendance) + (communication * weightCommunication);
  
      // Simpan Hasil
      employees.push({ employee: `Karyawan ${String.fromCharCode(65 + i)}`, wp });
    }
  
    // Peringkat
    const rankings = rankResults(employees);
  
    // Keluaran
    displayResult(rankings);
  }
  
  function rankResults(results) {
    return results.sort((a, b) => b.wp - a.wp);
  }
  
  function displayResult(rankings) {
    const resultContainer = document.getElementById('result');
    resultContainer.innerHTML = '';
    for (let i = 0; i < rankings.length; i++) {
      const li = document.createElement('li');
      li.textContent = `${rankings[i].employee}: ${rankings[i].wp.toFixed(2)}`;
      resultContainer.appendChild(li);
    }
  }  