package br.com.babyfix.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.babyfix.model.VeiculosModel;

public interface VeiculosRepository extends JpaRepository<VeiculosModel, Long> {

	VeiculosModel findById(long id);
	//VagasModel findByNome(String nome);	
}
