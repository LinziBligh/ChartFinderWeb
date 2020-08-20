class Api::UsersController<ApplicationController

    def new
    end
  
    def create
      @user = User.create(user_params)
      @user.save
      session[:user_id] = @user.id
    end
  
    private
  
    def user_params
      params.require(:user).permit(:name, :password, :password_confirmation)
    end
  end