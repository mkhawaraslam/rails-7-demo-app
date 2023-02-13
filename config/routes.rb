Rails.application.routes.draw do
  root 'welcome#index'

  resources :welcome, only: :index, path_names: { index: '/' }
  resources :profiles, only: %i[new create]
end
