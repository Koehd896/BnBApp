Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :rooms
      resources :users, only: [:create]
      resources :bookings, only: [:create]
    end
  end
  post '/api/v1/login', to: 'api/v1/auth#create'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
