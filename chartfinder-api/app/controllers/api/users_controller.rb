class Api::UsersController<ApplicationController

  def create

    newuser = User.create(username: params[:username], password: params[:password])
    if newuser.persisted?
      render json: newuser
      session[:user_id]= newuser.id
    else
      render json:{message: 'the user didnt save!'}
    end
  end

end