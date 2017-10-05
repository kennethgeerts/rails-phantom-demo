class StructuresController < ApplicationController
  def show
    @structure = Structure.new

    respond_to do |format|
      format.html
      format.json { render json: @structure.to_json }
      format.png do
        send_data StructureImage.new(@structure).data,
          type: 'image/png',
          disposition: 'inline'
      end
    end
  end
end
