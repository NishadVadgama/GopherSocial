package main

import (
	"encoding/json"
	"fmt"
	"os"

	"github.com/getkin/kin-openapi/openapi2"
	"github.com/getkin/kin-openapi/openapi2conv"
)

func main() {
	// read the file
	data, err := os.ReadFile("docs/swagger.json")
	if err != nil {
		panic(err)
	}

	v3Data, err := V2ToV3(data)
	if err != nil {
		panic(err)
	}

	// write the file
	if err := os.WriteFile("docs/swagger_v3.json", v3Data, 0644); err != nil {
		panic(err)
	}
	fmt.Println("Conversion complete")
}

func V2ToV3(v2Data []byte) ([]byte, error) {
	v2Spec := &openapi2.T{}
	if err := json.Unmarshal(v2Data, v2Spec); err != nil {
		return nil, err
	}

	v3Spec, err := openapi2conv.ToV3(v2Spec)
	if err != nil {
		return nil, err
	}

	return json.Marshal(v3Spec)
}
