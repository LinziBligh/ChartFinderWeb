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
    if params[:formData][:birthday]
    birthday = Birthday.find_by_id(params[:formData][:chartId])
    user.birthdays<<birthday
    user.save
    else
    chart = Chart.find_by_id(params[:formData][:chartId])
    user.charts<<chart
    user.save
    end
    render json: UserSerializer.new(user).to_serialized_json
  end

  def destroy
    user = User.find_by_id(params[:formData][:userId])
    chart = Chart.find_by_id(params[:formData][:chartId])
    user.charts.delete(chart)
    user.save
    render json: UserSerializer.new(user).to_serialized_json
  end

  private

  def user_params
    params .require(:formData).permit(:username, :password, :userId, :chartId)
  end

end