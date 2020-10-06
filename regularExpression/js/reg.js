window.onload = function () {
  let tel = document.querySelector("#tel");
  const telreg = /^1\d{10}$/;
  regexp(tel, telreg);

  let qq = document.querySelector("#qq");
  const qqreg = /^[1-9]\d{4,}$/;
  regexp(qq, qqreg);

  let nc = document.querySelector("#nc");
  const ncreg = /^[A-Za-z0-9]{4,8}$/;
  regexp(nc, ncreg);

  let msg = document.querySelector("#msg");
  const msgreg = /^\d{5,6}$/;
  regexp(msg, msgreg);

  let pwd = document.querySelector("#pwd");
  const pwdreg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
  regexp(pwd, pwdreg);

  let surepwd = document.querySelector("#surepwd");
  surepwd.onblur = function () {
    if (this.value == pwd.value) {
      this.nextElementSibling.className = "success";
      this.nextElementSibling.innerHTML =
        '<i class="success_icon"></i> 恭喜您输入正确';
    } else {
      this.nextElementSibling.className = "error";
      this.nextElementSibling.innerHTML =
        '<i class="error_icon"></i> 格式不正确，请从新输入';
    }
  };

  function regexp(ele, reg) {
    ele.onblur = function () {
      if (reg.test(this.value)) {
        this.nextElementSibling.className = "success";
        this.nextElementSibling.innerHTML =
          '<i class="success_icon"></i> 恭喜您输入正确';
      } else {
        this.nextElementSibling.className = "error";
        this.nextElementSibling.innerHTML =
          '<i class="error_icon"></i> 格式不正确，请从新输入';
      }
    };
  }
};
