import { Controller } from "@hotwired/stimulus"
import Cropper from 'cropperjs';

export default class extends Controller {
  static targets = ['output', 'input']

  connect() {
    alert('asd')
    this.onModalEvent();
  }

  selectAvatar() {
    this.inputTarget.click();
  }

  displayAvatarPreview() {
    let input = this.inputTarget
    let output = this.outputTarget

    if (input.files && input.files[0]) {
      let reader = new FileReader();

      reader.onload = function () {
        output.src = reader.result;
      }

      reader.readAsDataURL(input.files[0]);
    }

    document.getElementById('profile_crop_avatar_x').value = '';
    document.getElementById('profile_crop_avatar_y').value = '';
    document.getElementById('profile_crop_avatar_w').value = '';
    document.getElementById('profile_crop_avatar_h').value = '';

    $('#avatarModal').modal('show');
  }

  onModalEvent() {
    $('#avatarModal').on('shown.bs.modal', function() {
      let croppable = false;
      let x;
      let img = document.getElementById('crop-avatar');
      x = new Cropper(img, {
        aspectRatio: 1,
        viewMode: 1,
        ready: function () {
          croppable = true;
        },
        crop: function (event) {
          let data = event.detail;
          document.getElementById('profile_crop_avatar_x').value = data.x;
          document.getElementById('profile_crop_avatar_y').value = data.y;
          document.getElementById('profile_crop_avatar_w').value = data.width;
          document.getElementById('profile_crop_avatar_h').value = data.height;
        }
      });
    }).on('hidden.bs.modal', function () {
      x.destroy();
    });
  }
}
