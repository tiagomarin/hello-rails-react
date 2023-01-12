class GreetingsController < ApplicationController
  def message
    render json: Greeting.all.sample
  end
end