class StructuresController < ApplicationController
  def show
    @structure = Structure.new

    respond_to do |format|
      format.html
      format.json { render json: @structure.to_json }
      format.png do
        send_data StructureImage.new(@structure).data(show_params),
          type: 'image/png',
          disposition: 'inline'
      end
    end
  end

  private

  def show_params
    params.permit(:base64)
  end
end
