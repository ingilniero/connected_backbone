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
    @task = Task.find(params[:id])
    respond_to do |format|
      format.json { render :json => @task.to_json }
    end
  end

  def update
    @task = Task.find(params[:id])
    @task.update_attributes(parameters)

    respond_to do | format |
      format.json { render :json => @task.to_json }
    end
  end

  def destroy
    @task= Task.find(params[:id])
    @task.destroy
    respond_to do | format |
      format.json { render :json => @task.to_json }
    end
  end

  def parameters
    params.require(:task).permit(:id, :title, :completed)
  end
end
