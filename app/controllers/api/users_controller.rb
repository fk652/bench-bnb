class Api::UsersController < ApplicationController
  before_action :require_logged_out, only: [:create]

  wrap_parameters include: User.attribute_names + ['password']

  def create
    # render json: user_params

    @user = User.new(user_params)
    if @user.save
      login!(@user)
      # render json: @user
      render :show
    else 
      render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private
  def user_params
    params.require(:user).permit(:email, :username, :password)
  end
end