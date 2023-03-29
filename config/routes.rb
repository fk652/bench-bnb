Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  
  # post 'api/test', to: 'application#test'

  namespace :api, defaults: { format: :json } do
    resource :session, only: [:show, :create, :destroy]
    resources :users, only: :create
    resources :benches, only: [:index, :create, :show]
  end

  # Defines the root path route ("/")
  # root "articles#index"
end
