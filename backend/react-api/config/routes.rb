Rails.application.routes.draw do
  resources :rooms
  resources :users, only: [:create]
  resources :bookings, only: [:create]
  post '/login', to: 'auth#create'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
