class Structure
  def initialize
    @hash = {"id"=>"be234da4-f906-425f-9303-0e072d7045ec", "cells"=>[{"type"=>"CORP", "size"=>{"width"=>160, "height"=>60}, "angle"=>0, "id"=>"be234da4-f906-425f-9303-0e072d7045ec", "z"=>1, "attrs"=>{".node rect"=>{"fill"=>"#EEEEEE"}, ".name"=>{"text"=>"kenneth"}, ".company_type"=>{"text"=>"Corporation"}, ".country"=>{"text"=>"BE"}, ".currency"=>{"text"=>"€"}, ".node"=>{"node_id"=>"be234da4-f906-425f-9303-0e072d7045ec", "node_structure_id"=>nil, "structure_id"=>nil}, "polygon.fund"=>{"fill"=>"#EEEEEE"}, ".source_node"=>{"display"=>"inline"}}}, {"type"=>"CORP", "size"=>{"width"=>160, "height"=>60}, "angle"=>0, "id"=>"b2beb139-aba9-40dc-b5ae-49a06d8506df", "z"=>1, "attrs"=>{".node rect"=>{"fill"=>"#EEEEEE"}, ".name"=>{"text"=>"pow"}, ".company_type"=>{"text"=>"Corporation"}, ".country"=>{"text"=>"BE"}, ".currency"=>{"text"=>"€"}, ".node"=>{"node_id"=>"b2beb139-aba9-40dc-b5ae-49a06d8506df", "node_structure_id"=>nil, "structure_id"=>nil}, "polygon.fund"=>{"fill"=>"#EEEEEE"}}}, {"type"=>"CORP", "size"=>{"width"=>160, "height"=>60}, "angle"=>0, "id"=>"8c3833b5-67d6-424a-93ba-1d816cad1c62", "z"=>1, "attrs"=>{".node rect"=>{"fill"=>"#EEEEEE"}, ".name"=>{"text"=>"lala1"}, ".company_type"=>{"text"=>"Corporation"}, ".country"=>{"text"=>"BE"}, ".currency"=>{"text"=>"€"}, ".node"=>{"node_id"=>"8c3833b5-67d6-424a-93ba-1d816cad1c62", "node_structure_id"=>nil, "structure_id"=>nil}, "polygon.fund"=>{"fill"=>"#EEEEEE"}}}, {"type"=>"EQUITYINSTRUMENT", "source"=>{"id"=>"be234da4-f906-425f-9303-0e072d7045ec"}, "target"=>{"id"=>"8c3833b5-67d6-424a-93ba-1d816cad1c62"}, "id"=>"instrument_holding2", "z"=>-1, "instrument_holding_type"=>"EQUITYINSTRUMENT", "instrument_id"=>2, "instrument_holding_id"=>2, "percentage"=>"ORD\\n100.0 %", "weight"=>1, "labels"=>[{"position"=>0.5, "attrs"=>{"text"=>{"text"=>"ORD\\n100.0 %", "font-size"=>10}, "rect"=>{}}}], "connector"=>{"name"=>"rounded"}}, {"type"=>"EQUITYINSTRUMENT", "source"=>{"id"=>"b2beb139-aba9-40dc-b5ae-49a06d8506df"}, "target"=>{"id"=>"be234da4-f906-425f-9303-0e072d7045ec"}, "id"=>"instrument_holding4", "z"=>-1, "instrument_holding_type"=>"EQUITYINSTRUMENT", "instrument_id"=>3, "instrument_holding_id"=>4, "percentage"=>"ORD\\n100.0 %", "weight"=>1, "labels"=>[{"position"=>0.5, "attrs"=>{"text"=>{"text"=>"ORD\\n100.0 %", "font-size"=>10}, "rect"=>{}}}], "connector"=>{"name"=>"rounded"}}]}
  end

  def to_json
    @hash.to_json
  end
end
