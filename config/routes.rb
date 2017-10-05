Rails.application.routes.draw do
  resources :structures, only: :show
end
