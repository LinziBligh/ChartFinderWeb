class Api::ChartsController<ApplicationController
before_action :set_chart, only: [:show, :edit, :destroy]

  def index
    charts=Chart.all
    render json: ChartSerializer.new(charts).to_serialized_json
  end

  def show
    render json: ChartSerializer.new(@chart).to_serialized_json
  end

  def create
    chart=Chart.new(chart_params)
    if chart.save
      render json: chart
    else
      render json:{message: chart.errors}, status: 400
    end
  end

  def destroy 
    if @chart.destroy
      render status:204
    else
      render json:{message: "Unable to remove this chart"}, status: 400
    end
  end

    private

    def chart_params
      params .require(:chart).permit(:date, :country, :songs)
    end

    ##helper method to flip date and set chart
    def set_chart
      ddmmyyyy = params[:id].split("-").reverse.join("-")
      @chart = Chart.find_by(date: ddmmyyyy)
      
    end



end