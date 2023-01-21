Rails.application.routes.draw do
  root 'root#index'

  namespace :api do
    namespace :v1 do
      resources :users, only: [:index, :show] do
        resources :greetings, only: [:index, :show]
      end
    end
  end
end
