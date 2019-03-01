export const customWebpackConfig = {
	"type": "object",
	"description": "Custom webpack configuration",
	"properties": {
		"path": {"type": "string", "description": "Path to the custom webpack configuration file"},
		"mergeStrategies": {"type": "object", "description": "Merge strategies per webpack config field"},
		"replaceDuplicatePlugins": {"type": "boolean", "description": "Flag that indicates whether to replace duplicate webpack plugins or not"}
	},
	// @ts-ignore
	"default": null
};
