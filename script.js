function calcAge() {
    let dob = document.getElementById("dob").value;
      if (!dob) {
          alert("Select date of birth");
              return;
                }

                  let birthDate = new Date(dob);
                    let today = new Date();

                      let age = today.getFullYear() - birthDate.getFullYear();
                        let m = today.getMonth() - birthDate.getMonth();

                          if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                              age--;
                                }

                                  document.getElementById("ageResult").innerText =
                                      "Your Age is " + age + " years";
                                      }

                                      function calcEMI() {
                                        let p = document.getElementById("amount").value;
                                          let r = document.getElementById("rate").value / 12 / 100;
                                            let n = document.getElementById("months").value;

                                              if (!p || !r || !n) {
                                                  alert("Fill all fields");
                                                      return;
                                                        }

                                                          let emi = (p * r * Math.pow(1 + r, n)) /
                                                                      (Math.pow(1 + r, n) - 1);

                                                                        document.getElementById("emiResult").innerText =
                                                                            "Monthly EMI: ₹" + emi.toFixed(2);
                                                                            }
}