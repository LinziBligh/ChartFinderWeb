class Api::UsersController<ApplicationController

  def create
    puts "you made it to the backend!!"
    newuser = User.create(user_params)
    if newuser.persisted?
      render json: newuser
      session[:user_id]= newuser.id
    else
      render json:{message: newuser.errors}, status: 400
    end
  end

  private

  def user_params
    params .require(:formData).permit(:username, :password)
  end

end