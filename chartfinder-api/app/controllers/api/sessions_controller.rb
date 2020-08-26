class Api::SessionsController < ApplicationController

  
    def create
      user = User.find_by_username(params[:formData][:username])
      if user
        user.authenticate(params[:formData][:password])
        session[:user_id] = user.id
        render json: user
      end
    end
  
    def destroy
      session[:user_id] = nil
      render json: {message: "You have successfully logged out"}
    end

  
    
  end