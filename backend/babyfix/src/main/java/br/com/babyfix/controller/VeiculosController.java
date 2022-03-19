package br.com.babyfix.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import org.springframework.web.bind.annotation.RestController;

import br.com.babyfix.model.VeiculosModel;
import br.com.babyfix.repository.VeiculosRepository;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class VeiculosController {

	@Autowired
	private VeiculosRepository veiculosRepository;
	
	//GET VAGAS
	@RequestMapping(value = "/veiculos", method = RequestMethod.GET)
	public List<VeiculosModel> listar() {
		return veiculosRepository.findAll();
	}
	
	//POST VAGAS
	@RequestMapping(value = "/cadastrar", method = RequestMethod.POST)
	public VeiculosModel gravarVeiculo(@RequestBody VeiculosModel veiculosModel) {
		return veiculosRepository.save(veiculosModel);
	}
	
	//PUT VAGAS
	@RequestMapping(value = "/editar/{id}", method = RequestMethod.PUT)
	public VeiculosModel editarVeiculo(@RequestBody VeiculosModel veiculosModel) {
		return veiculosRepository.save(veiculosModel);
	}
	
	//DELETE VAGAS
	@RequestMapping(value = "/veiculos/{id}", method = RequestMethod.DELETE)
	public void excluirVeiculo(@PathVariable long id) {
		veiculosRepository.deleteById(id);
	}
	
}

