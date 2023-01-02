class API::V1::UsersController < ApplicationController
  def index
    render json: User.all, status: :ok
  end

  def show
    render json: User.find(params[:id]), status: :ok
  end
end