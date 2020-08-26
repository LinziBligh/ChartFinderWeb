class UserSerializer

  def initialize(user_object)
    @user=user_object
  end

  def to_serialized_json
    options = {include: [:charts, :birthdays], except: [:updated_at, :password_digest]}
    @user.to_json(options)
  end
end