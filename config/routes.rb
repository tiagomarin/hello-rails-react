# frozen_string_literal: true

Rails.application.routes.draw do
  root 'root#index'
  get 'greetings/message'
end
