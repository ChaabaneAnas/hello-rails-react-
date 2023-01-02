class Api::V1::GreetingsController < ApplicationController
  def index
    user = User.find(params[:user_id])
    render json: user.greetings, status: :ok
  end

  def show
    greeting = Greeting.find(params[:id])
    if greeting.nil?
      render json: { error: "Greeting not found" }, status: :not_found
    else
      render json: greeting, status: :ok
    end
  end
end