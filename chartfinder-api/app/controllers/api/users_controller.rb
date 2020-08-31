class Api::UsersController<ApplicationController

  def create
    newuser = User.create(user_params)
    if newuser.persisted?
      render json: UserSerializer.new(newuser).to_serialized_json
      session[:user_id]= newuser.id
    else
      render json:{message: newuser.errors}, status: 400
    end
  end

  def update
    user = User.find_by_id(params[:formData][:userId])
    chart = Chart.find_by_id(params[:formData][:chartId])
    user.charts<<chart
    user.save
    render json: UserSerializer.new(user).to_serialized_json
  end

  def destroy
    puts "destroying in process"
  end

  private

  def user_params
    params .require(:formData).permit(:username, :password, :userId, :chartId)
  end

end