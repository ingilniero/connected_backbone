class TasksController < ApplicationController
  ActiveRecord::Base.include_root_in_json = false

  def index
    @tasks = Task.all

    respond_to do |format|
      format.html { render :html => @tasks }
      format.json { render :json => @tasks.to_json }
    end
  end

  def show
    @task = Task.find(1)
    respond_to do |format|
      format.json { render :json => @task.to_json }
    end
  end
end
