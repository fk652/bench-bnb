class Api::SessionsController < ApplicationController
  before_action :require_logged_out, only: [:create]
  before_action :require_logged_in, only: [:destroy]

  def show
    # banana

    if current_user
      # render json: { user: current_user }

      @user = current_user
      render "api/users/show"
    else
      render json: { user: nil }
    end
  end

  def create
    @user = User.find_by_credentials(params[:credential], params[:password])
    if @user 
      login!(@user)

      # render json: { user: @user }
      render "api/users/show"
    else
      render json: { errors: ['The provided credentials were invalid.'] }, status: :unauthorized
    end
  end

  def destroy
    if current_user
      logout!()

      head :no_content
      # render json: { message: 'success' }
    end
  end
end
