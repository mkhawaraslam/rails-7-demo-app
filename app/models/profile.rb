class Profile < ApplicationRecord
  store_accessor :crop_data, :crop_avatar_x, :crop_avatar_y, :crop_avatar_w, :crop_avatar_h

  has_one_attached :avatar
end
